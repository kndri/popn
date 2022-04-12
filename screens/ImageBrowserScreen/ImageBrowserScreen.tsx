import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import { ImageBrowser } from 'expo-image-picker-multiple';
import styles from './styles';
import { useRoute } from '@react-navigation/native';


const ImageBrowserScreen = (props: { navigation: any; }) => {
    const route = useRoute();
    const { setFormikImages }: any = route.params;
    console.log('formik: ', setFormikImages)

    const getHeaderLoader = () => (
        <ActivityIndicator size='small' color={'#0580FF'} />
    );

    const imagesCallback = (callback) => {
        const { navigation } = props;
        props.navigation.setOptions({
            headerRight: () => getHeaderLoader()
        });

        callback.then(async (photos) => {
            const cPhotos = [];
            for (let photo of photos) {
                const pPhoto = await processImageAsync(photo.uri);
                cPhotos.push({
                    uri: pPhoto.uri,
                    name: photo.filename,
                    type: 'image/jpg'
                })
            }
            console.log('selected Pics', cPhotos)
            setFormikImages('images', cPhotos)
            navigation.navigate('ListingImages', cPhotos);
        })
            .catch((e) => console.log(e));
    };

    const processImageAsync = async (uri) => {
        const file = await ImageManipulator.manipulateAsync(
            uri,
            [{ resize: { width: 1000 } }],
            { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
        );
        return file;
    };

    const renderDoneButton = (count, onSubmit) => {
        if (!count) return null;
        return <TouchableOpacity onPress={onSubmit}>
            <Text onPress={onSubmit}>Done</Text>
        </TouchableOpacity>
    }

    const updateHandler = (count, onSubmit) => {
        props.navigation.setOptions({
            title: `Selected ${count} photos`,
            headerRight: () => renderDoneButton(count, onSubmit)
        });
    };

    const renderSelectedComponent = (number) => (
        <View style={styles.countBadge}>
            <Text style={styles.countBadgeText}>{number}</Text>
        </View>
    );


    const emptyStayComponent = <Text style={styles.emptyStay}>Empty</Text>;

    return (
        <View style={[styles.flex, styles.container]}>

            <ImageBrowser
                max={15}
                onChange={updateHandler}
                callback={imagesCallback}
                renderSelectedComponent={renderSelectedComponent}
                emptyStayComponent={emptyStayComponent}
            />
        </View>
    );

}


export default ImageBrowserScreen;