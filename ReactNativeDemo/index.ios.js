import React, { Component } from 'react';
import {
     AppRegistry,
    Text,
     Dimensions,
     PixelRatio
} from 'react-native';

const {height, wihth} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

// import Login from "./js/Login";
// ./MyScene表示的是当前目录下的MyScene.js文件，也就是我们刚刚创建的文件
// 注意即便当前文件和MyScene.js在同一个目录中，"./"两个符号也是不能省略的！
// 但是.js后缀是可以省略的
// import MyScene from './js/MyScene';
// import Login from './js/Login'
// import FlatListExample from  './js/FlatListExample'
// import KeyboardAvoidingViewDemo from  './js/KeyboardAvoidingViewDemo'
// import ModalDemo from './js/ModalDemo';
// import NavigatorIOSDemo from './js/NavigatorIOSDemo';
// import PickerDemo from './js/PickerDemo';
// import RefreshControlDemo from './js/RefreshControlDemo';
// import BoxAppDemo from './js/BoxAppDemo';
import DongFang from './js/BoxDemo'
import XieChengDemo from './js/DongFangDemo/XieChengDemo'

// <MyScene />
// <Login />
// <FlatListExample/>
// <Login />

// <KeyboardAvoidingViewDemo />
// <ModalDemo />
// <NavigatorIOSDemo/>
// <PickerDemo/>
// <RefreshControlDemo/>
// <DongFang />




class ReactNativeDemo extends Component {
  render() {
    return (
        <XieChengDemo/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
