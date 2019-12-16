import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Text, View, Icon } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                <Text>Home!</Text>
            </View>
        )
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                <Text>Settings!</Text>
            </View>
        )
    }
}

const TabNavigator = createBottomTabNavigator (
    {
        screen: HomeScreen,
        Settings: SettingsScreen,
    }
);

// const MainNavigator = createStackNavigator({
//     A: {
//         screen: Main,
//         navigationOptions: () => ({
//             title: "JLC Rental",
//             headerStyle: {
//                 backgroundColor: "#DA552F",
//                 alignContent: "center",
//             },
//             headerTintColor: "#FFF",
//             header
//         }),
//     }
// });

const App = createAppContainer(TabNavigator);
export default App;