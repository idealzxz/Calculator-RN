import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import {Slider} from '@ant-design/react-native';
interface InputListprops {
    title: string;
    type: number;
    onchange: any;
    no: number;
    onRef: any;
}
interface InputListstate {
    inputText: string;
    SliderValue: number;
}
export default class InputList extends Component<InputListprops, InputListstate> {
    constructor(props: InputListprops) {
        super(props);
        this.state = {
            inputText: '',
            SliderValue: 12,
        };
    }
    onChangeText(val: string) {
        this.setState({
            inputText: val,
        });
        this.props.onchange(Number(val), this.props.no);
    }
    onChangeSlide(val: number) {
        this.setState({
            SliderValue: val,
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
                {this.props.type === 0 ? (
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.InputViewText}
                            value={this.state.inputText}
                            keyboardType="numeric"
                            onChangeText={val => this.onChangeText(val)}></TextInput>
                        <Text>元</Text>
                    </View>
                ) : (
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1}}>
                            <Slider
                                min={0}
                                max={12}
                                defaultValue={this.state.SliderValue}
                                onChange={(value: any) => {
                                    let val = parseInt(value);
                                    this.onChangeSlide(val);
                                }}
                            />
                        </View>

                        <Text style={{width: 30, textAlign: 'right', marginLeft: 5}}>
                            {this.state.SliderValue}%
                        </Text>
                    </View>
                )}
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
    InputView: {
        flex: 1,
        flexDirection: 'row',
    },
    InputViewText: {
        flex: 1,
        textAlign: 'right',
        paddingRight: 10,
    },
});
