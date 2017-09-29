import React, { Component } from 'react';
import {
     AppRegistry,
     Navigator,
     Dimensions,
     PixelRatio
} from 'react-native';

const {height, wihth} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

// ./MyScene表示的是当前目录下的MyScene.js文件，也就是我们刚刚创建的文件
// 注意即便当前文件和MyScene.js在同一个目录中，"./"两个符号也是不能省略的！
// 但是.js后缀是可以省略的

import MyScene from './js/MyScene';
import Login from './js/Login'
import FlatListExample from  './js/FlatListExample'

// <MyScene />
// <Login />
class ReactNativeDemo extends Component {
  render() {
    return (
        <FlatListExample />
    )
  }
}

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
