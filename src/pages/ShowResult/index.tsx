import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
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
                                alignItems: 'center',
                            }}>
                                    <Text>Hello World!</Text>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.onclose();
                                        }}>
                                        <Text>关闭结果</Text>
                                    </TouchableOpacity>
                        </SafeAreaView>
                    </SafeAreaProvider>
                </Modal>
            </View>
        );
    }
}
