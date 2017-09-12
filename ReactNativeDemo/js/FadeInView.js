import React, { Component } from 'react';
import {
     View, 
     Text,
     Image,
     TouchableHighlight,
     Animated
} from 'react-native';

export default class FadeInView1 extends Component {   
    
    componentDidMount() {
        
    }
    
    
    constructor(props) {
        super(props);
        this.state = {
            // 透明度初始化设置为0
            fadeAnim: new Animated.Value(0),
            
        };
    }
}