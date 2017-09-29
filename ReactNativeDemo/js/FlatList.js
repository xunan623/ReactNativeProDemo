

class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    }

    render() {
        <SomeOtherWidget {...this.props} onPress={this._onPress}/>
    }
}

class MyList extends React.PureComponent {
    state = {selected: (new Map(): Map<string, boolean>)};

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        this.setState((state) => {
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id));
            return {selected};
        });
    };

    _renderItem = ({item}) => (
        <MyListItem id={item.id} onPressItem={this._onPressItem} selected={!!this.state.selected.get(item.id)} title={item.title}/>
    );

    render() {
        return (
            <FlatList data={this.props.data} extraData={this.state}  keyExtractor={this._keyExtractor} renderItem={(this._renderItem)} />
        );
    }

}