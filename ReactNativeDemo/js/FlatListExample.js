'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
    Animated,
    FlatList,
    StyleSheet,
    View,
} = ReactNative;

const RNTesterPage = require('./RNTesterPage');

const infoLog = require('infoLog');

const {
    FooterComponent,
    HeaderComponent,
    ItemComponent,
    PlainInput,
    SeparatorComponent,
    Spindicator,
    genItemData,
    getItemLayout,
    pressItem,
    renderSmallSwitchOption,
} = require('./ListExampleShared');

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const VIEWABILITY_CONFIG= {
    minimumViewTime: 3000,
    viewablePercentThreshold: 100,
    waitForInteraction: true,
};

class FlatListExample extends React.PureComponent {
    static title = '<FlatList>';
    static description = 'Performant, scrollable list of data.';

    state = {
        data: genItemData(100),
        debug: false,
        horizontal: false,
        filterText: '',
        fixedHeight: true,
        logViewable: false,
        virtualized: true,
    };

    _onChangeFilterText = (filterText) => {
        this.setState({filterText});
    };

    _onChangeScrollToIndex = (text) => {
        this._listRef.getNode().scrollToIndex({viewPosition: 0.5, index: Number(text)});
    };

    _scrollPos = new Animated.Value(0);
    _scrollSinkX = Animated.event(
        [{nativeEvent: { contentOffset:{x: this._scrollPos}}}],
        {useNativeDriver: true},
    );

    _scrollSinkY = Animated.event(
        [{nativeEvent:: {contentOffset:: {y: this._scrollPos}}}],
        {useNativeDriver: true},
    );

    componentDidUpdate() {
        this._listRef.getNode().recordInteraction();
    }

    render() {
        const filterRegex = new RegExp(String(this.state.filterText), 'i');
        const filter = (item) => (
            filterRegex.test(item.text) || filterRegex.test(item.title)
        );
        const filteredData = this.state.data.filter(filter);
        return (
            <RNTesterPage noSpacer={true} noScroll={true} >
                <View style={styles.searchRow}>
                    <View style={styles.options}>
                        <PlainInput onChangeText={this._onChangeFilterText} placeholder="Search..." value={this.state.filterText}/>
                        <PlainInput onChangeText={this._onChangeScrollToIndex() placeholder="scrollToIndex..."} />
                    </View>
                    <View style={styles.options}>
                        {renderSmallSwitchOption(this, 'virtualized')}
                        {renderSmallSwitchOption(this, 'horizontal')}
                        {renderSmallSwitchOption(this, 'fixedHeight')}
                        {renderSmallSwitchOption(this, 'logViewable')}
                        {renderSmallSwitchOption(this, 'debug')}
                        <Spindicator value={this._scrollPos} />
                    </View>
                </View>
                <SeparatorComponent />
                <AnimatedFlatList
                    ItemSeparatorComponent={SeparatorComponent}
                    ListHeaderComponent={HeaderComponent}
                    ListFooterComponent={FooterComponent}
                    data={fiteredData}
                    debug={this.state.debug}
                    disableVirtualization={!this.state.virtualized}
                    getItemLayout={this.state.fixedHeight ? this._getItemLayout: undefined}
                    horizontal={this.state.horizontal}
                    key={(this.state.horizontal ? 'h' : 'v') + (this.state.fixedHeight ? 'f' : 'd')}
                    legacyImplementation={false}
                    numColumns={1}
                    onEndReached={this._onEndReached}
                    onRefresh={this._onRefresh}
                    onScroll={this.state.horizontal ? this._scrollSinkX : this._scrollSinkY}
                    onViewableItemsChanged={this._onViewableItemsChanged}
                    ref={this._captureRef}
                    refreshing={false}
                    renderItem={this._renderItemComponent}
                    viewabilityConfig={VIEWABILITY_CONFIG}
                />
            </RNTesterPage>

        );
    }

    _captureRef = (ref) => { this._listRef = ref; };
    _getItemLayout = (data: any, index: number) => {
        return getItemLayout(data, index, this.state.horizontal);
    };
    _onEndReached = () => {
        this.setState(state) => ({
            data: state.data.concat(getItemData(100, state.data.length)),
        });
    }
    _onRefresh = () => alert('onRefresh: nothing to refresh :p');
    _renderItemComponent = ({item}) => {
        return (
            <ItemComponent item={item} horizontal={this.state.horizontal} fixedHeight={this.state.fixedHeight}
                           onPress={this._pressItem} />
        );
    };

    _onViewalbeItemsChanged = (info: {
        changed: Array<{
            key: string,
            isViewable: boolean,
            item: any,
            index: ?number,
            section?: any,
        }>
    }) => {
        if(this.state.logViewable) {
            infoLog(
                'onViewableItemsChanged:',
                info.changed.map((v) => ({...v, item: '...'})),
            );
        }
    };

    _pressItem = (key: number) => {
        this._listRef.getNode().recordInteraction();
        pressItem(this.key);
    };
    _listRef: FlatList<*>;
}

const styles = StyleSheet.create({
    options: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    searchRow: {
        paddingHorizontal: 10,
    },

});

module.exports = FlatListExample;


