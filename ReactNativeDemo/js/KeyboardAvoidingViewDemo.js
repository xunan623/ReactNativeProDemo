'use strict';

const React = require('React');
const ReactNative = require('react-native');

const {
    KeyboardAvoidingView,
    Modal,
    SegmentedControlIOS,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} = ReactNative;

const RNTesterBlock = require('./RNTesterBlock');
const RNTesterPage = require('./RNTesterPage');

class KeyboardAvoidingViewDemo extends React.Component {
    static title = '<KeyboardAvoidingView>';
    static description = 'Base component for views that automatically adjust their height or position to move out of the way of the keyboard.';

    state = {
        behavior: 'padding',
        modalOpen: false,
    };

    onSelectionChange = (segment: String) => {
        this.setState({behavior: segment.toLocaleLowerCase()});
    };

    renderExample = () => {
        return (
            <View style={styles.outContainer}>
                <Modal animationType="fade" visible={this.state.behavior}>
                    <KeyboardAvoidingView behavior={this.state.behavior} style={styles.container}>
                        <SegmentedControlIOS
                            onValueChange={this.onSelectionChange}
                            selectedIndex={this.state.behavior == 'padding' ? 0 : 1}
                            style={styles.segment}
                            values={['Padding', 'Position']}/>
                        <TextInput placeholder="<TextInput/>" style={styles.textInput}/>
                    </KeyboardAvoidingView>
                    <TouchableHighlight onPress={()=>this.setState({modalOpen: false})} style={styles.closeButton}>
                        <Text>Close</Text>
                    </TouchableHighlight>
                </Modal>
                <TouchableHighlight onPress={() => this.setState({modalOpen:true})}>
                    <Text>Open Example</Text>
                </TouchableHighlight>
            </View>
        );
    };

    render() {
        return (
            <RNTesterPage title="Keyboard Avoiding View">
                <RNTesterBlock title="Keyboard-avoiding views move out of ther way of the keyboard.">
                    {this.renderExample()}
                </RNTesterBlock>
            </RNTesterPage>
        );
    };
}

const styles = StyleSheet.create({
    outContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
    },
    segment: {
        marginBottom: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 30,
        left: 10,
    }
});

module.exports = KeyboardAvoidingViewDemo;