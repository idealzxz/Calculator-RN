import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import InputList from '@/components/InputList';
interface Computedprops {}

interface Computedstate {}
export default class Computed extends Component<Computedprops, Computedstate> {
    constructor(props: Computedprops) {
        super(props);
    }
    private child: any = [];
    public List: any = [
        {title: '税前工资', type: 0, value: 0},
        {title: '社保基数', type: 0, value: 0},
        {title: '公积金基数', type: 0, value: 0},
        {title: '公积金缴存比例', type: 1, value: 0},
    ];
    onchange(e: number, index: number) {
        this.List[index].value = e;
        console.log(this.List);
    }
    onRef = (ref: any) => {
        ref && this.child.push(ref);
    };
    onPressMath = () => {};
    onPressRestart = () => {
        this.List &&
            this.List.forEach((item: any) => {
                item.value = 0;
            });
        this.child &&
            this.child.map((item: any) => {
                item.clearInput();
            });
    };

    componentDidMount() {}
    render() {
        return (
            <View style={{flex: 1, padding: 20}}>
                {this.List.map((item: any, index: number) => {
                    return (
                        <InputList
                            onRef={this.onRef}
                            key={index}
                            no={index}
                            title={item.title}
                            type={item.type}
                            onchange={this.onchange.bind(this)}></InputList>
                    );
                })}
                <TouchableOpacity style={[styles.button, styles.start]} onPress={this.onPressMath}>
                    <Text> 开始计算 </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.restart]}
                    onPress={this.onPressRestart}>
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
