'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    SegmentedControlIOS,
    Text,
    View,
    StyleSheet,
} = ReactNative;

var BasicSegmentedControlExample = React.createClass({
    render() {
        return (
            <View>
                <View style={{marginBottom:10}}>
                    <SegmentedControlIOS values={['One', 'Two']} />
                </View>
                <View>
                    <SegmentedControlIOS values={['One', 'Two', 'Three', 'Four', 'Five']}/>
                </View>
            </View>
        );
    }
});

var PreSelectedSegmentedControlExample = React.createClass({
    render() {
        return (
            <View>
                <View>
                    <SegmentedControlIOS values={['One', 'Two']} />
                </View>
            </View>
        );
    }
});