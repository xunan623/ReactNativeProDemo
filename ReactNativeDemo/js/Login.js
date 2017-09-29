import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput
} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;

export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.TextInputStyle} placeholder={'请输入手机号码'} />
                <Text style={styles.TextPromptStyle}> 您输入的手机号码:</Text>
                <TextInput style={styles.TextInputStyle} placeholder={'请输入密码'} password={true} />
                <Text style={styles.bigTextPrompt}> 确定</Text>
            </View>
        );
    }
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    TextInputStyle: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        fontSize: 20
    },
    TextPromptStyle: {
        margin: widthOfMargin,
        fontSize: 20
    },
    bigTextPrompt: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    }
});