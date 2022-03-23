import React from 'react';
import { Button, Screen, Text, TextField, AutoImage as Image } from '..';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { spacing } from '../../theme';
import Tooltip from 'react-native-walkthrough-tooltip';

import {
	View,
	ViewStyle,
	TextStyle,
	TouchableOpacity,
	TextInput,
	FlatList,
	TouchableHighlight,
} from 'react-native';
import {
	addLike,
	checkLoggedUser,
	getCurrentPost,
	getPostFromDB,
	likeDeletion,
	postDeletion,
} from '../../aws-functions/aws-functions';

const liked = require('../../assets/images/Liked.png');
const unliked = require('../../assets/images/Unliked.png');
const comment = require('../../assets/images/comment.png');
const share = require('../../assets/images/share.png');
const more = require('../../assets/images/More.png');

const POST_CONTAINER: ViewStyle = {
	display: 'flex',
	flexDirection: 'row',
	paddingHorizontal: spacing[3],
	marginBottom: 15,
};
const RIGHT_SIDE_POST: ViewStyle = {
	display: 'flex',
	flexDirection: 'column',
	flex: 1,

	alignItems: 'flex-start',

	// width: "90%",
};
const INTERACTIONS: ViewStyle = {
	display: 'flex',
	flexDirection: 'row',
	// justifyContent: "space-between",
};
const INTERACTIONS_BUTTONS: ViewStyle = {
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: 'transparent',
	alignContent: 'flex-start',
	justifyContent: 'space-between',
	flex: 1,
};

const BUTTON_TEXT: TextStyle = {
	marginLeft: 5,
};
const MODAL_CONTAINER: ViewStyle = {
	width: 500,
	height: 500,
	backgroundColor: 'red',
};

const Post = ({ post, fetchPosts }) => {
	const navigation = useNavigation();
	const [toolTipVisible, setToolTipVisible] = React.useState(false);
	const [myLike, setMyLike] = React.useState<any>();
	const [username, setUsername] = React.useState<any>();
	const [likesCount, setLikesCount] = React.useState();
	const [commentCount, setCommentCount] = React.useState();

	const getUser = async () => {
		const user = await checkLoggedUser();
		setUsername(user.attributes.sub);

		const postDetails = await getCurrentPost(post.id);

		setCommentCount(postDetails.comments?.items.length);
		setLikesCount(postDetails.likes?.items.length);

		const searchedLike = post.likes.items.find(
			(like: any) => like.userID === user.attributes.sub
		);
		setMyLike(searchedLike);
	};

	React.useEffect(() => {
		getUser();
		setCommentCount(post.comments.items?.length);
		setLikesCount(post.likes.items?.length);
	}, []);

	const handlePress = () => {
		navigation.navigate('PostDetails', {
			post,
			myLike,
			likesCount,
			commentCount,
		});
	};
	const onLike = async () => {
		// if (!user) {
		//   return;
		// }

		if (!myLike) {
			const result = await addLike(post.id);
			setMyLike(result.data.createLike);
			setLikesCount(likesCount + 1);
		} else {
			await likeDeletion(myLike.id);
			setLikesCount(likesCount - 1);
			setMyLike(null);
		}
	};

	const createDeleteAlert = () =>
		Alert.alert('Delete Post', 'Are you sure you want to delete this Post?', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: 'OK',
				onPress: () => {
					postDeletion(post.id);
					fetchPosts();
				},
			},
		]);

	const toolContent = () => (
		<View>
			{username == post.userID ? (
				<TouchableOpacity
					onPress={() => {
						createDeleteAlert();
						setToolTipVisible(false);
					}}
				>
					<Text>Delete Post</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('UserProfile', post.userID);
						setToolTipVisible(false);
					}}
				>
					<Text>Profile Page</Text>
				</TouchableOpacity>
			)}
		</View>
	);

	return (
		<TouchableOpacity onPress={() => handlePress()}>
			<View style={POST_CONTAINER}>
				<TouchableOpacity
					onPress={() => navigation.navigate('UserProfile', post.userID)}
				>
					<Image
						// have to check for image the default image in user data contains
						source={{ uri: post.user.avatarImageURL }}
						style={{
							resizeMode: 'contain',
							height: 40,
							width: 40,
							marginRight: 5,
							// flex: 1,
						}}
					/>
				</TouchableOpacity>
				<View style={RIGHT_SIDE_POST}>
					<Text
						preset="header"
						style={{
							fontSize: 12,
							margin: 5,
						}}
					>
						{post.user.username}
					</Text>
					<Text
						preset="default"
						style={{
							fontSize: 10,
							margin: 5,
						}}
					>
						{post.description}
					</Text>
					<View style={INTERACTIONS}>
						<Button style={INTERACTIONS_BUTTONS} onPress={() => onLike()}>
							{!myLike ? <Image source={unliked} /> : <Image source={liked} />}
							<Text style={BUTTON_TEXT}>{likesCount} </Text>
						</Button>
						<Button
							style={INTERACTIONS_BUTTONS}
							onPress={() =>
								navigation.navigate('NewPost', {
									comment: post,
									fetchPosts: fetchPosts(),
								})
							}
						>
							<Image source={comment} />

							<Text style={BUTTON_TEXT}>{commentCount} </Text>
						</Button>
						{/* <Button
              style={INTERACTIONS_BUTTONS}
              // onPress={() =>
              //   navigation.navigate("Settings", { screen: "settings" })
              // }
            >
              <Image source={seen} />
              <Text style={BUTTON_TEXT}>{item.seen} </Text>
            </Button> */}
						<Button
							style={INTERACTIONS_BUTTONS}
							// onPress={() =>
							//   navigation.navigate("Settings", { screen: "settings" })
							// }
						>
							<Image source={share} />
						</Button>
					</View>
				</View>
				<Tooltip
					isVisible={toolTipVisible}
					content={toolContent()}
					arrowSize={{ width: 0, height: 0 }}
					placement="bottom"
					contentStyle={{
						left: 110,
						bottom: 70,
						maxWidth: 200,
					}}
					arrowStyle={{ bottom: 60 }}
					showChildInTooltip={false}
					backgroundColor="transparent"
					closeOnChildInteraction={true}
					onClose={() => setToolTipVisible(false)}
				>
					<TouchableOpacity onPress={() => setToolTipVisible(true)}>
						<Image source={more} />
					</TouchableOpacity>
				</Tooltip>
			</View>
		</TouchableOpacity>
	);
};

export default Post;
