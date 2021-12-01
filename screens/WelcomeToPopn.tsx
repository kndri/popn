import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeToPopn() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to popn!</Text>
            <Button title="go to home" onPress={() => navigation.navigate('Splash')} />
        </View>
    );
}


