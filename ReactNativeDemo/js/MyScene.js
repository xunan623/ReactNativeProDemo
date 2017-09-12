import React, { Component } from 'react';
import {
     View, 
     Text,
     Image,
     TouchableHighlight,
     Animated
} from 'react-native';



export default class MyScene extends Component {
  static defaultProps = {
    title: 'MyScene'
  };

  _onPressButton() {
    console.log('你点击了我');
  } 
  
  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
        {/* 正确 */}
       <Image 
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png', cache: 'only-if-cached'}}
            style={{width: 100, height: 100}} 
        />
        <TouchableHighlight onPress={this._onPressButton}>
            <Text>Button</Text>
        </TouchableHighlight>


      </View>
    )
  }
}