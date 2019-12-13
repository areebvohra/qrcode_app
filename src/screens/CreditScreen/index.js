import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class CreditScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'My Credits',
        tabBarIcon: ({ focused }) => (
            <Entypo
                name='credit'
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
                <Text style={{ fontSize: 25 }}>My Credits</Text>
                <Text style={{ fontSize: 150 }}>200</Text>
            </View>
        );
    }
}