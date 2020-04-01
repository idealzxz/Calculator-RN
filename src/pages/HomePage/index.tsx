import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/AntDesign';
import Computed from '@/pages/Computed';
import User from '@/pages/User';
const Tab = createBottomTabNavigator();
export default class HomePage extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName="Computed">
                <Tab.Screen
                    name="Computed"
                    component={Computed}
                    options={{
                        tabBarLabel: '计算',
                        tabBarIcon: ({color, size}) => (
                            <Icons name={'home'} size={size} color={color}  />
                        ),
                    }}
                />
                <Tab.Screen name="my" component={User} options={{
                    tabBarLabel:'我的',
                    tabBarIcon:({color,size})=>(
                        <Icons name={'user'} size={size} color={color}  />
                    )
                }} />
            </Tab.Navigator>
        );
    }
}
