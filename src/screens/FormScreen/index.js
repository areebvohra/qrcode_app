import React, { Component } from 'react'
import { View, Button, StatusBar, TextInput } from 'react-native';
import EndPoints from '../../constants/Endpoints';

export default class FormScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '1', email: '1', phone: '1'
        }
    }

    onsubmit = () => {
        var data = "username=" + this.state.username + "&email=" + this.state.email + "&cellno=" + this.state.phone;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", async function () {
            if (this.readyState === 4) {
                const res = await JSON.parse(this.responseText)
                console.log(res[0])
            }
        });

        xhr.open("POST", EndPoints.login);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }

    render() {
        StatusBar.setHidden(true)
        return (
            <View style={{ flex: 1, width: '100%' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput onChangeText={(username) => this.setState({ username })}
                        placeholder="Username" placeholderTextColor="grey" underlineColorAndroid="grey"
                        style={{ width: '80%', paddingBottom: '3%', paddingLeft: '3%', marginVertical: '5%' }} />
                    <TextInput onChangeText={(email) => this.setState({ email })}
                        placeholder="Email" placeholderTextColor="grey" underlineColorAndroid="grey"
                        style={{ width: '80%', paddingBottom: '3%', paddingLeft: '3%', marginVertical: '5%' }} />
                    <TextInput onChangeText={(phone) => this.setState({ phone })} keyboardType="phone-pad"
                        placeholder="Cell no." placeholderTextColor="grey" underlineColorAndroid="grey"
                        style={{ width: '80%', paddingBottom: '3%', paddingLeft: '3%', marginVertical: '5%' }} />
                    <View style={{ width: '80%' }}>
                        {/* <Button title="Submit" onPress={() => this.onsubmit()} /> */}
                        <Button title="Submit" onPress={() => this.props.navigation.navigate("OTP")} />
                    </View>
                </View>
            </View>
        );
    }
}