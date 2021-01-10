import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const GameOverScreen = ({navigation}) => {
    return <SafeAreaView> 
        <Text>You died!</Text>
        <Text>HighScore: 0</Text>
    </SafeAreaView>
};

export default GameOverScreen;