import * as React from 'react';
import {View, Text,StyleSheet} from 'react-native';
interface Homeprop {}
const Home: React.FC<Homeprop> = props => {
    return (
        <View style={styles.header}>
            <Text>DEMO</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    header:{
        height:30,
        alignItems:"center",
        justifyContent:"center",
        borderBottomColor:"#000",
        borderBottomWidth:1
    }
})
export default Home;
