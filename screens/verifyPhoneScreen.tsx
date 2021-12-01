import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';

export default function VerifyNumberScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Enter the code we've sent.</Text>
            <Text>By Continuing, you are confirming that you {"\n"} have read and understood the Privacy Policy.</Text>
            <Button title="Next" onPress={() => navigation.navigate('Welcome')} />
        </View>
    );
}


