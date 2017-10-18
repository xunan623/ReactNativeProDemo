'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet,
    RecyclerViewBackedScrollView,
    Text,
    View,
} = ReactNative;

var RNTesterPage = require('./RNTesterPage');

var ListViewSimpleExample = React.createClass({
    statics: {
        title: '<ListView>',
        description: 'Performat, scrollable list of data.'
    },

    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            dataSource: ds.cloneWithRows(this._genRows({})),
        );
    },

    _pressData: ({}: {[key: number]: boolean}),

    componentDidMount: function () {
        this._pressData = {};
    },

    render: function () {
        return (
            <RNTesterPage title={this.props.navigator ? null: '<ListView>'} noSpacer={true} noScroll={true}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderScrollComponent={props => <RecyclerViewBackedScrollView {...props}/>}
                    renderSeparator={this._renderSeparator}
                />
            </RNTesterPage>
        );
    }

});