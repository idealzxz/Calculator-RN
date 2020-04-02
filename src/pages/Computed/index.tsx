import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import InputList from '@/components/InputList';

export default class Computed extends Component {
    public state = {
        List: [
            {title: '税前工资', type: 0, value: 0},
            {title: '社保基数', type: 0, value: 0},
            {title: '公积金基数', type: 0, value: 0},
            {title: '公积金缴存比例', type: 1, value: 0},
        ],
    };
    onchange(val: number, index: number) {
        this.state.List[index].value = val;
    }
    onPressMath() {}
    render() {
        return (
            <View style={{flex: 1, padding: 20}}>
                {this.state.List.map((item: any, index: number) => {
                    return (
                        <InputList
                            key={index}
                            title={item.title}
                            type={item.type}
                            value={item.value}
                            onchange={this.onchange(item.value, index)}></InputList>
                    );
                })}
                <TouchableOpacity style={[styles.button, styles.start]} onPress={this.onPressMath}>
                    <Text> 开始计算 </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.restart]}
                    onPress={this.onPressMath}>
                    <Text style={styles.button_text}> 重新输入 </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 15,
        marginTop: 10,
    },
    button_text: {
        color: '#ffffff',
    },
    start: {
        backgroundColor: '#cccccc',
    },
    restart: {
        backgroundColor: '#DC143C',
        color: '#ffffff',
    },
});
