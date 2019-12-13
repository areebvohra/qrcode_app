import React, { Component } from 'react'
import { View, Button, StatusBar, TextInput, Text, StyleSheet } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

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
                    <OTPInputView
                        style={{ width: '80%', height: 100 }}
                        pinCount={4}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />
                    <View style={{ width: '80%' }}>
                        <Button title="Submit" onPress={() => this.props.navigation.navigate("QRCode")} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    underlineStyleBase: {
        width: 40,
        height: 40,
        borderWidth: 1,
    },
    underlineStyleHighLighted: {
        borderColor: "black",
    },
});
