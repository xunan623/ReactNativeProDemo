'use strict';

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default class XieChengDemo extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.container}>
                    <View style={[styles.item, styles.center]}>
                         <Text style={styles.font}>酒店</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={[styles.flex, styles.center]}>
                            <Text style={styles.font}>海外酒店</Text>
                        </View>
                        <View style={[styles.flex, styles.center]}>
                            <Text style={styles.font}>特惠酒店</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={[styles.flex, styles.center]}>
                            <Text style={styles.font}>团购</Text>
                        </View>
                        <View style={[styles.flex, styles.center]}>
                            <Text style={styles.font}>客栈,公寓</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop:200,
        marginLeft:5,
        marginRight:5,
        height:84,
        flexDirection:'row',
        borderRadius:5,
        padding:2,
        backgroundColor:'#FF0067',
    },
    item: {
        flex:1,
        height:80,
        borderWidth:1,
        borderColor:'blue',
    },
    center: {
        justifyContent: "center",
        alignItems: 'center',
    },
    flex: {
        flex:1,
    },
    font: {
        color: '#fff',
        fontSize:16,
        fontWeight:'bold',
    },
});