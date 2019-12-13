import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class ServiceScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Services',
        tabBarIcon: ({ focused }) => (
            <AntDesign
                name='customerservice'
                size={22}
                style={{ color: focused ? 'white' : 'black' }}
            />
        ),
    };

    constructor(props) {
        super(props)
        this.state = {
            code: ''
        }
    }

    render() {
        StatusBar.setHidden(true)
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25 }}>Services Screen</Text>
            </View>
        );
    }
}