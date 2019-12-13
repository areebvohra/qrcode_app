import React, { Component } from 'react'
import { View, Button, StatusBar, TextInput, Text } from 'react-native';

export default class OTPScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: ''
        }
    }

    render() {
        StatusBar.setHidden(true)
        return (
            <View style={{ flex: 1, width: '100%' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18 }}>Verification Code</Text>
                    <TextInput onChangeText={(code) => this.setState({ code })} keyboardType="phone-pad"
                        placeholder="Enter Your 8 Digit OTP Code" placeholderTextColor="grey" underlineColorAndroid="grey" maxLength={8}
                        style={{ width: '80%', paddingBottom: '3%', paddingLeft: '3%', marginVertical: '5%' }} />
                    <View style={{ width: '80%' }}>
                        <Button title="Submit" onPress={() => this.props.navigation.navigate("App")} />
                    </View>
                </View>
            </View>
        );
    }
}