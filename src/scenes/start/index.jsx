import React from 'react';
import { SafeAreaView, StyleSheet, TouchableHighlight, View} from 'react-native';
import { Container, Button, Text } from 'native-base';

const StartScreen = ({setGameState, score}) => {
    return <SafeAreaView> 
        <View style={styles.startContainer}>
            <Text>Welcome to my first app!</Text>
            <Text>HighScore: {score}</Text>
            <Button style={styles.startButton}
            onPress={() => setGameState("INGAME")}
            >
                <Text>Start!</Text>
            </Button>
        </View>
    </SafeAreaView>
};

const styles = StyleSheet.create({
    startContainer : {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    startButton : {
        alignSelf: 'center',
        margin: 30
    }
});

export default StartScreen;