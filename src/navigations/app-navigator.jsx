import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from '_scenes/start';
import InGameScreen from '_scenes/ingame';
import GameOverScreen from '_scenes/gameover';

const AppNavigatorConfig = {
    initialRouteName: 'Start',
    header: null,
    headerMode: 'none',
    animationEnabled : false,
}

const RouteConfigs = {
    Start : StartScreen,
    InGame : InGameScreen,
    GameOver : GameOverScreen
}

const Stack = createStackNavigator(RouteConfigs, AppNavigatorConfig);

const AppNavigator = () => {
    return Stack
}

export default AppNavigator;