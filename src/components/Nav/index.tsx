import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Nav = () => {
    const Tab = createBottomTabNavigator();
    function HomeScreen() {
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
        );
    }
    function SettingsScreen() {
        return (
            <View>
                <Text>Details Screen</Text>
            </View>
        );
    }
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Nav;
