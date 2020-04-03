import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View,StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
interface ShowResultstate {}
interface ShowResultprops {
    show: boolean;
    onclose: any;
}
export default class ShowResult extends Component<ShowResultprops, ShowResultstate> {
    constructor(props: ShowResultprops) {
        super(props);
    }
    private List = [
        {name: '养老保险', value: 0},
        {name: '医疗保险', value: 0},
        {name: '养老保险', value: 0},
        {name: '失业保险', value: 0},
        {name: '住房公积金', value: 0},
    ];
    componentDidMount() {}
    render() {
        return (
            <View>
                <Modal animationType="slide" transparent={false} visible={this.props.show}>
                    <SafeAreaProvider>
                        <SafeAreaView
                            style={{
                                flex: 1,
                                justifyContent: 'space-between',
                            }}>
                            <View style={styles.result}>
                                {this.List.map((item: any, index: number) => {
                                    return (
                                        <Text key={index} style={{padding:10}}>
                                            {item.name}: {item.value}
                                        </Text>
                                    );
                                })}
                            </View>

                            <TouchableOpacity
                            style={styles.button}
                                onPress={() => {
                                    this.props.onclose();
                                }}>
                                <Text style={styles.button_text}>关闭结果</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </SafeAreaProvider>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 15,
        margin: 10,
        backgroundColor: '#DC143C',
    },
    button_text: {
        color: '#ffffff',
    },
    result:{
        margin:15
    }
});