import { View, Image, ScrollView } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Screen,
    Text,
    Header,
    Button,
} from '../../components';

import styles from './styles';


const ListingImagesScreen = (props) => {

    const photos = props.route.params;
    const navigation = useNavigation();
    const [images, setImages] = React.useState([]);

    React.useEffect(() => {
        if (photos) {
            console.log('props:', photos)
            setImages(photos)
        } else {
            console.log('no images have been selected')
        }
    }, [photos]);

    const renderImage = (item, i) => {
        return (
            <Image
                style={{ height: 150, width: 135 }}
                source={{ uri: item.uri }}
                key={i}
            />
        )
    }

    return (
        <Screen style={styles.CONTAINER}>

            <Header
                headerTx="New Listing"
                leftIcon="back"
                onLeftPress={() => { navigation.goBack() }}
            />

            {/* SECTION: for description input */}
            <View style={styles.LISTING_CONTAINER}>
                <Text text="Please provide the photos you sent to CheckCheck for verification." preset='bold' />

                {images.length > 0 ? (
                    <View style={{ height: 150 }}>
                        <ScrollView
                            // centerContent
                            horizontal
                            style={{ borderWidth: 2, borderColor: 'black', borderRadius: 5, }}

                        >
                            {images.map((item, i) => renderImage(item, i))}
                        </ScrollView>

                    </View>
                ) : (
                    null
                )}

                <Button
                    text="Choose Photos"
                    style={{ marginTop: 90 }}
                    onPress={() => { navigation.navigate('ImageBrowser') }}
                />

                {/* BUTTON uploads the listing to the marketplace and navigates to ... */}
                <View
                    style={{
                        marginTop: 175,
                        paddingBottom: 50,
                        backgroundColor: 'white'
                    }}>
                    <Button
                        style={
                            images.length > 0 ?
                                styles.NEXT_BUTTON : styles.DISABLED_NEXT_BUTTON
                        }
                        text="Next"
                        // onPress={() => {  }}
                        disabled={images.length != 0 ? false : true}
                    />
                </View>

            </View>
        </Screen>
    );
};

export default ListingImagesScreen;