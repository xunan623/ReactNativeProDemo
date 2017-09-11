

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true};

        setInterval(() => {
            this.setState(previousState =>{
                return { showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.Text : '';
        return (
            <Text>(display)</Text>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        )
    }
}

export default class ReactNativeDemo extends Component {
  render() {

    let pic = {
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    return (

      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}} />

        {/* Props属性 */}
        <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar'/>
                <Greeting name='Jaina'/>
                <Greeting name='Valeera'/>
         </View>

        {/* State状态 */}
        <View>
            <Blink text = 'I Love to blink' />
            <Blink text='Yes blinking is so great' />
            <Blink text='Why did they ever take this out of HTML' />
            <Blink text='Look at me look at me look at me' />
        </View>

        {/* 样式 */}
        <View>
           <Text style={styles.red}>just red</Text>
           <Text style={styles.bigblue}>jsut bigblue</Text>
           <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
           <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        </View>

        {/* 高度和宽度 */}
        <View>
            <View style={{width: 10, height:10, backgroundColor: 'powderblue'}} />
            <View style={{width: 20, height: 20, backgroundColor: 'skyblue'}} />
            <View style={{width: 30, height: 30, backgroundColor: 'steelblue'}} />
        </View>

        {/* 高度宽度的flex ?????????????????????????????????????????????????????????????? */}
        {/* <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} />
            <View style={{flex: 1, backgroundColor: 'skyblue'}} />
            <View style={{flex: 1, backgroundColor: 'steelblue'}} />
        </View> */}

        {/* 使用Flexbox布局 */}
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
            <View style={{width: 20, height: 20, backgroundColor: 'powderblue'}} />
            <View style={{width: 20, height: 20, backgroundColor: 'skyblue'}} />
            <View style={{width: 20, height: 20, backgroundColor: 'steelblue'}} />
        </View>

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
            <View style={{width: 20, height: 20, backgroundColor: 'red'}} />
            <View style={{width: 20, height: 20, backgroundColor: 'yellow'}} />
            <View style={{width: 20, height: 20, backgroundColor: 'blue'}} />
        </View>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
          change the text  for  show 
        </Text>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 14,
  },
  red: {
      color: 'red',
  },
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
