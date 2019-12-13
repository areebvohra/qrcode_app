import React, { Component } from 'react'
import { View, StatusBar, Text, TextInput, Button } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Feather } from '@expo/vector-icons';

export default class QRCodeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'My ID',
        tabBarIcon: ({ focused }) => (
            <Feather
                name='user'
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
                <QRCode value={this.state.code} size={300} bgColor='black' fgColor='white' />
                <Text style={{ marginVertical: '5%', fontSize: 18 }}>Your QR Code is Generated</Text>
            </View>
        );
    }
}