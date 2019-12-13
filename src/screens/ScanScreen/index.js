import React, { Component } from 'react'
import { View, Button, StatusBar, Text, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            scanned: false,
        }
    }

    componentDidMount = async () => {
        await this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });
        alert("You Scanned: " + data);
    };

    render() {
        StatusBar.setHidden(true)
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === false) {
            alert("No access to camera")
        }
        return (
            <View style={{ flex: 1 }}>
                <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFill}>
                    <View style={{ flex: 1, backgroundColor: 'white' }} />
                    <View style={{ flex: 2 }} />
                    <View style={{ flex: 1, backgroundColor: 'white' }} />
                </BarCodeScanner>
                {scanned && (
                    <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
                )}
            </View>
        );
    }
}