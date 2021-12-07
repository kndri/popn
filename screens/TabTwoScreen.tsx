import * as React from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity, TextInput, FlatList  } from "react-native";
import { color, spacing, typography } from "../theme"
import {
  Button,
  Screen,
  Text,
  TextField,
  AutoImage as Image
} from "../components"
import sneakerData from '../new_sneaker_data.json';
import { useNavigation } from '@react-navigation/native';

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[3],
  flex: 1,
  marginTop: 25,
}
const CENTER: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
}
const CLAIM_HEADER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: 17,
}
const CLAIM_SEARCH: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
}
const COLLECTION_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
}
const TEXTCENTER: TextStyle = {
  textAlign: 'center',
  alignItems: 'center',
}
const INPUT: TextStyle = {
  fontFamily: typography.primaryBold,
}
const INPUTSTYLE_CONTAINER: ViewStyle = {
  width: '100%',
  height: 55,
  marginBottom: 30,
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 10,
};

const SHADOW: ViewStyle =  {
  shadowColor: '#171717',
  shadowOffset: {width: 2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 3,
};


export default function TabTwoScreen() {
  const navigation = useNavigation();
  const renderSneaker = ({item}) => (
    <View style={ {  justifyContent: 'space-evenly', height: 150, width: 150, borderWidth: 1, borderColor: "#EBEBEB", borderRadius: 10, marginBottom: 40, marginHorizontal: 10 }}>
    <View style={{ justifyContent: 'flex-start' , alignItems: 'flex-start', marginLeft: 10, marginTop: 10}}>
      <Text text={`${item.primary_name}`} style={{ fontSize: 12, color: '#979797'}} />
      <Text text={`${item.secondary_name}`}  style={{ fontSize: 10}} />
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center', }} >
      <Image source={{uri: item.image_url }} style={{ height: 81, width: 100, resizeMode: "contain"}} />
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center', }} >
    <Button
    preset="none"
        style={{  justifyContent: 'center',  width: '70%', height: 20, paddingVertical: 2, borderRadius: 10, marginBottom: 15 }}
        onPress={() => {
          navigation.navigate('Password')
        }}
       >
          <Text preset="bold" style={{ fontSize: 12, color: "white", fontWeight: 'bold' }}>View</Text>
      </Button>
    </View>
  </View>
  );

  return (
    <Screen style={CONTAINER}>
      <View style={CLAIM_HEADER}>
        <Text preset="header" text="Claim" />
      </View>

      <View style={CLAIM_SEARCH}>
        <TextInput
          style={{
            width: '100%',
            height: 54,
            borderWidth: 1,
            paddingLeft: 20,
            borderRadius: 10,
            margin: 5,
            borderColor: 'black',
            backgroundColor: 'white',
          }}
          placeholder="Search"
        />
      </View>

      <View style={COLLECTION_CONTAINER}>
      <FlatList
        data={sneakerData}
        renderItem={renderSneaker}
        keyExtractor={(sneaker) => String(sneaker.id)}
        numColumns={2}
        contentContainerStyle={{flex: 1,  justifyContent: 'space-between', alignItems: 'center'}} 
      />
      </View>
    </Screen>
  );
}

