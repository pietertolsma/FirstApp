import React, {Component, useState} from 'react';
import { Dimensions, TouchableWithoutFeedback, Image, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {Target} from '_atoms';
//let [targetCount, setTargetCount] = useState(1);

class InGameScreen extends Component {

    constructor() {
        super();
        this.state = {
            targetCount : 0,
            totalCount : 0,
            targets : [],
            spawnInterval : 1000,
        }
    }

    getRandomCoordinates(maxX, maxY, objectWidth, objectHeight) {
        return [Math.random() * (maxX - objectWidth), Math.random() * (maxY - objectHeight)];
    }

    getRandomTarget() {
        let [randX, randY] = this.getRandomCoordinates(800, 2000, 60, 60);

        return {
            id: this.state.totalCount,
            x: randX,
            y: randY,
            size: 400
        }
    }

    spawnTargets() {
        this.setState({totalCount : this.state.totalCount + 1, 
            targetCount : this.state.targetCount + 1, 
            targets : [...this.state.targets, this.getRandomTarget()]});

        if (this.state.targetCount > 1) {
            this.props.updateScore(this.state.totalCount - this.state.targetCount)
            this.props.setGameState("START");
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.spawnTargets(), this.state.spawnInterval);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        this.setState({
            targetCount : 0,
            totalCount : 0,
            targets : [],
            spawnInterval : 1000,
        })

    }

    removeTarget(id) {

        this.setState({targetCount: this.state.targetCount - 1,
            targets: this.state.targets.filter((target) => target.id != id)
        });
    }

    render() {

        let targets = [];
        for (let i = 0; i < this.state.targets.length; i++) {
            targets.push(
                <Target 
                    location={this.state.targets[i]}
                    key={this.state.targets[i].id}
                    onPress={() => this.removeTarget(this.state.targets[i].id)}/>
            )
        }

        return <SafeAreaView> 
            <Text>In Game!</Text>
            <Text>HighScore: {this.state.totalCount - this.state.targetCount}</Text>
            {targets}
        </SafeAreaView>
    }
}

const styles = StyleSheet.create({
    gameContainer : {

    }
});

export default InGameScreen;