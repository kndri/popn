import * as React from 'react';
import { StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';

const splashImage = require('../assets/images/offwhite.png')

export default function SplashScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.FULL}>
            <View style={styles.CONTAINER}>
                <Text style={styles.HEADER_TITLE}>POPN</Text>
                <Text style={styles.HEADER_SUBTITLE}>display the hype.</Text>
                <Image source={splashImage} style={{ top: 105, width: 230, height: 350, alignSelf: 'center' }} />
                <TouchableOpacity style={styles.BUTTON} onPress={() => navigation.navigate('Age')}>
                    <Text style={{color: 'white'}}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    FULL: {
        flex: 1,
        alignItems: 'center',
    },
    CONTAINER: {
        backgroundColor: 'blue',
        height: "100%",
        width: '80%'
    },
    HEADER_TITLE: {
        textAlign: "center",
        top: 11,
        fontWeight: 'bold',
        fontSize: 36,
        fontStyle: 'normal',
        lineHeight: 48

    },
    HEADER_SUBTITLE: {
        textAlign: "center",
        top: 15,
        fontWeight: 'normal',
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 20
    },
    BUTTON: {
        alignSelf: 'center',
        backgroundColor: "black",
        borderRadius: 5,
        width: 256,
        height: 64,
        top: 150

    }
});

