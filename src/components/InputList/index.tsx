import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
interface InputListprops {
    title: string;
    type: number;
    value: number;
    onchange: any;
}
export default class InputList extends Component<InputListprops> {
    constructor(props: InputListprops) {
        super(props);
    }
    onChangeText(val: any) {}
    render() {
        return (
            <View style={styles.InputList}>
                <Text style={styles.InputList_Label}>{this.props.title}:</Text>
                <TextInput
                    style={{flex: 1}}
                    value={this.props.value ? String(this.props.value) : ''}
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
