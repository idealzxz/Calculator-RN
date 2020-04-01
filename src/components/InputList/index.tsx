import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
interface InputListprops{
    
}
export default class InputList extends Component {
    constructor(props:InputListprops){
        super(props);
    }
    render() {
        return (
            <View style={styles.InputList}>
                <Text style={styles.InputList_Label}>您的月工资:</Text>
                <TextInput style={{flex: 1}}></TextInput>
                <Text>元</Text>
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
        paddingRight: 10,
    },
});