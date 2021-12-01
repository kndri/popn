import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';

export default function AgeScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>How old are you?</Text>
            <Text>You must be 13 or older to use popn.</Text>
            <Text>By Continuing, you are confirming that you {"\n"} have read and understood the Privacy Policy </Text>
            <Button title="Next" onPress={() => navigation.navigate('Username')} />
        </View>
    );
}


