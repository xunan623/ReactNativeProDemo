'use strict';

import React from 'react';
import {
    ScrollView,
    StyleSheet,
    RefreshControl,
    Text,
    TouchableNativeFeedback,
    View
} from 'react-native';

const styles = StyleSheet.create({
    row: {
        borderColor: 'grey',
        borderWidth:1,
        padding:20,
        backgroundColor:"#3a5795",
        margin:5,
    },
    text: {
        alignSelf:'center',
        color: '#fff',
    },
    scrollview: {
        flex:1,
    },
});

const Row = React.createClass({
    _onClick: function () {
        this.props.onClick(this.props.data);
    },
    render: function () {
        return (
            <TouchableNativeFeedback onPress={this._onClick()}>
                <View style={styles.row}>
                    <Text style={styles.text}>
                        {this.props.data.text + '(' + this.props.data.clicks + 'clicks)'}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
});

extends default class RefreshControlDemo extends React.createClass({
    statics: {
        title: '<RefreshControl>',
        description: 'Adds pull-to-refresh support to a scrollView'
    },

    getInitialState() {
        return (
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map((val, i) => ({text: 'Initial row ' + i, clicks: 0})),
        );
    },

    _onClick(row) {
        row.clicks++;
        this.setState({
            rowData: this.state.rowData,
        });
    },

    render() {
        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row} onClick={this._onClick()}/>;
        });

        return (
            <ScrollView
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh()}
                        title="loading"
                        tintColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="ffff00"
                    />
                }>
                {rows}
            </ScrollView>
        );
    },

    _onRefresh() {
        this.setState({isRefreshing:true});
        setTimeout(()=> {
            const rowData = Array.from(new Array(10)).map((val, i)=> ({
                text: 'Loaded row' + (+this.state.loaded + i),
                clicks:0,
            })).concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing:false,
                rowData: rowData,
            });
        },5000);
    },
});

module.exports = RefreshControlDemo;