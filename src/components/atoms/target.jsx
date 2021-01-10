import React, {Component} from 'react';
import { TouchableWithoutFeedback, View, StyleSheet, Animated} from 'react-native';
class Target extends Component {
    constructor() {
        super();
        this._opacity = new Animated.Value(1);
        this._size = new Animated.Value(80)
    }

    componentDidMount() {

        Animated.timing(this._opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();

        Animated.timing(this._size, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false
        }).start();
    }

    render() {
        return <TouchableWithoutFeedback 
            onPress={this.props.onPress} style={[styles.touch, {width: this.props.location.size, height: this.props.location.size}]}>
                <Animated.View style={[styles.target, 
                    {
                        opacity: this._opacity,
                        left: this.props.location.x,
                        top: this.props.location.y,
                        width: this._size,
                        height: this._size,
                    }]}>
                </Animated.View>
        </TouchableWithoutFeedback>
    }
}

const styles = StyleSheet.create({

    touch: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },

    target: {
        backgroundColor: "blue",
        position: "relative",
        borderRadius: 50,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export default Target;