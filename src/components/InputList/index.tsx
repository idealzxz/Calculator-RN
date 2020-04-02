import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
interface InputListprops {
    title: string;
    type: number;
    onchange: any;
    no: number;
    onRef: any;
}
interface InputListstate {
    inputText: string;
}
export default class InputList extends Component<InputListprops, InputListstate> {
    constructor(props: InputListprops) {
        super(props);
        this.state = {
            inputText: '',
        };
    }
    onChangeText(val: string) {
        this.setState({
            inputText: val,
        });
        this.props.onchange(Number(val), this.props.no);
    }
    clearInput() {
        this.state.inputText &&
            this.setState({
                inputText: '',
            });
    }
    componentDidMount() {
        this.props.onRef(this);
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        return (
            <View style={styles.InputList}>
                <Text style={styles.InputList_Label}>{this.props.title}:</Text>
                <TextInput
                    style={{flex: 1, textAlign: 'right', paddingRight: 20}}
                    value={this.state.inputText}
                    keyboardType="numeric"
                    onChangeText={val => this.onChangeText(val)}></TextInput>
                <Text>{this.props.type === 0 ? '元' : '%'}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    InputList: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    InputList_Label: {
        paddingRight: 30,
    },
});
