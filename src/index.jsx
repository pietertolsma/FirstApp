import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { StartScene, InGameScene} from '_scenes';

const App = () => {
    let [gameState, setGameState] = useState("START");
    let [highScore, setHighScore] = useState(0);

    function updateHighScore(score) {
        if (score > highScore) {
            setHighScore(score);
        }
    }

    if (gameState === "START") {
        return <StartScene setGameState={setGameState} score={highScore}/>
    } else if (gameState === "INGAME") {
        return <InGameScene setGameState={setGameState} updateScore={updateHighScore}/>
    } else {
        return <Text>Invalid state!</Text>
    }
}

export default App;