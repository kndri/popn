import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import { ImageBrowser } from 'expo-image-picker-multiple';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const ImageBrowserScreen = () => {
	const navigation = useNavigation();
	const route = useRoute();
	const { setFormikImages }: any = route.params;

	const getHeaderLoader = () => (
		<ActivityIndicator size="small" color={'#0580FF'} />
	);

	const imagesCallback = (callback) => {
		navigation.setOptions({
			headerRight: () => getHeaderLoader(),
		});

		callback
			.then(async (photos) => {
				const cPhotos = [];
				for (let photo of photos) {
					const pPhoto = await processImageAsync(photo.uri);
					cPhotos.push({
						uri: pPhoto.uri,
						name: photo.filename,
						type: 'image/jpg',
					});
				}
				navigation.setOptions({
					setFormikImages: setFormikImages('images', cPhotos),
				});

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
		return (
			<TouchableOpacity onPress={onSubmit}>
				<Text onPress={onSubmit}>Done</Text>
			</TouchableOpacity>
		);
	};

	const updateHandler = (count, onSubmit) => {
		navigation.setOptions({
			title: `Selected ${count} photos`,
			headerRight: () => renderDoneButton(count, onSubmit),
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
};

export default ImageBrowserScreen;
