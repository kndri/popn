import { TextInput, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

// import ImagePicker from 'react-native-image-crop-picker';
{/* https://stackoverflow.com/questions/45543706/how-to-add-multiple-image-using-react-native-image-picker */ }
{/* https://github.com/ivpusic/react-native-image-crop-picker */ }

import {
    Screen,
    Text,
    Header,
    Button,
} from '../../components';

import styles from './styles';


interface NewListingProps { }

const ListingImagesScreen: FC<NewListingProps> = () => {
    const navigation = useNavigation();

    const [description, setDescription] = React.useState('');
    const [images, setImages] = React.useState([]);

    {/* WIP */ }
    // const selectPics = () => {

    //     let imageList = [];

    //     ImagePicker.openPicker({
    //         width: 200,
    //         height: 200,
    //         multiple: true,
    //         waitAnimationEnd: false,
    //         includeExif: true,
    //         forceJpg: true,
    //         compressImageQuality: 0.8,
    //         maxFiles: 15,
    //         compressImageMaxHeight: 400,
    //         mediaType: 'photo',
    //         includeBase64: true,
    //     }).then(response => {
    //         console.log('response: ', response);
    //         response.map(image => {
    //             imageList.push({
    //                 filename: image.path,

    //             })
    //         })
    //     })
    //         .catch(e => console.log('Error: ', e.message));
    // }






    return (
        <Screen style={styles.CONTAINER}>

            <Header
                headerTx="New Listing"
                leftIcon="back"
                onLeftPress={() => navigation.goBack()}
            />

            {/* SECTION: for description input */}
            <View style={styles.LISTING_CONTAINER}>

                <Text text="Please provide the photos you sent to CheckCheck for verification." preset='bold' />
                <View style={styles.IMAGE_BOX}>

                </View>

                <Button
                    text="Choose Photos"
                    style={{ marginTop: 45 }}
                    onPress={() => { selectPics() }}
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
                            description ?
                                styles.NEXT_BUTTON : styles.DISABLED_NEXT_BUTTON
                        }
                        text="Next"
                        onPress={() => { selectPics() }}
                        disabled={description != '' ? false : true}
                    />
                </View>

            </View>
        </Screen>
    );
};

export default ListingImagesScreen;