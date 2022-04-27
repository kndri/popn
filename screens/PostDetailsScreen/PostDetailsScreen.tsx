import React from 'react';
import {
	View,
	ViewStyle,
	TextStyle,
	FlatList,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { Screen, Text, Header, AutoImage as Image } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { color, spacing } from '../../theme';
import { ImageStyle } from 'react-native';
import {
	addLike,
	checkLoggedUser,
	commentDeletion,
	getCurrentPost,
	likeDeletion,
	postDeletion,
} from '../../aws-functions/aws-functions';
import Tooltip from 'react-native-walkthrough-tooltip';

import styles from './Styles';

const liked = require('../../assets/images/Liked.png');
const unliked = require('../../assets/images/Unliked.png');
const comment = require('../../assets/images/comment.png');
const more = require('../../assets/images/more.png');

const PostDetailsScreen = (props: any) => {
	const { post, myLike, likesCount, commentCount } = props.route.params;
	const navigation = useNavigation();
	const isFocused = navigation.isFocused();
	const [myLikes, setMyLike] = React.useState(myLike);
	const [comments, setComments] = React.useState<any[]>([]);
	const [likesCounts, setLikesCount] = React.useState(likesCount);
	const [commentCnt, setCommentCnt] = React.useState();
	const [toolTipVisible, setToolTipVisible] = React.useState(false);
	const [username, setUsername] = React.useState<any>();
	const [currentComment, setCurrentComment] = React.useState<any>();

	const fetchPost = async () => {
		const result = await getCurrentPost(post.id);
		setComments(result.comments.items);
		setCommentCnt(result.comments.items.length);

		//also set the likes count
		setLikesCount(result.likes.items.length);
	};

	const getUser = async () => {
		const user = await checkLoggedUser();
		setUsername(user.attributes.sub);
	};

	React.useEffect(() => {
		fetchPost();
		getUser();
	}, []);

	React.useEffect(() => {
		const rerender = navigation.addListener('focus', () => {
			if (isFocused) {
				fetchPost();
			}
		});
	}, []);

	const onLike = async () => {
		if (myLikes === null || myLikes === undefined) {
			const result = await addLike(post.id);
			setMyLike(result.data.createLike);
			setLikesCount(likesCounts + 1);
		} else {
			await likeDeletion(myLikes.id);
			setLikesCount(likesCounts - 1);
			setMyLike(null);
		}
	};
	const createDeleteAlert = (commentID) =>
		Alert.alert('Delete Post', 'Are you sure you want to delete this Post?', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: 'OK',
				onPress: () => {
					commentDeletion(commentID);
					fetchPost();
				},
			},
		]);

	// const toolContent = (commentID) => (
	//   <View>
	//     {/* {console.log("username", username)} */}
	//     {console.log("commentID", commentID)}
	//     {username == commentID ? (
	//       <TouchableOpacity
	//         onPress={() => {
	//           createDeleteAlert(commentID);
	//           setToolTipVisible(false);
	//         }}
	//       >
	//         <Text>Delete Post</Text>
	//       </TouchableOpacity>
	//     ) : (
	//       <TouchableOpacity
	//         onPress={() => {
	//           navigation.navigate("UserProfile", post.userID);
	//           setToolTipVisible(false);
	//         }}
	//       >
	//         <Text>Profile Page</Text>
	//       </TouchableOpacity>
	//     )}
	//   </View>
	// );

	const toolContent = () => {
		if (username === currentComment) {
			return (
				<TouchableOpacity
					onPress={() => {
						createDeleteAlert(currentComment);
						setToolTipVisible(false);
					}}
				>
					<Text>Delete Post</Text>
				</TouchableOpacity>
			);
		} else {
			return (
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('UserProfile', post.userID);
						setToolTipVisible(false);
					}}
				>
					<Text>Profile Page</Text>
				</TouchableOpacity>
			);
		}
	};
	const renderPosts = (post) => {
		return (
			<View style={styles.COMMENT_CONTAINER}>
				<Image
					source={{ uri: post.user.avatarImageURL }}
					style={{
						resizeMode: 'contain',
						height: 40,
						width: 40,
						marginRight: 5,
						// flex: 1,
					}}
				/>
				<View style={styles.RIGHT_SIDE_COMMENT}>
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
						{post.text}
					</Text>
					{/* <View
            style={{
              alignItems: "flex-start",
            }}
          >
            <Button
              style={INTERACTIONS_BUTTONS}
              // onPress={() =>
              //   navigation.navigate("Settings", { screen: "settings" })
              // }
            >
              <Image source={unliked} style={BUTTON_IMAGE} />
              <Text style={BUTTON_TEXT}>{item.likes} </Text>
            </Button>
          </View> */}
				</View>
				<Tooltip
					isVisible={toolTipVisible}
					content={toolContent()}
					arrowSize={{ width: 0, height: 0 }}
					placement="bottom"
					contentStyle={{
						left: 110,
						bottom: 150,
						maxWidth: 200,
					}}
					arrowStyle={{ bottom: 60 }}
					showChildInTooltip={false}
					backgroundColor="transparent"
					closeOnChildInteraction={false}
					onClose={() => setToolTipVisible(false)}
				>
					<TouchableOpacity
						onPress={() => {
							setToolTipVisible(true);
							setCurrentComment(post.userID);
						}}
					>
						<Image source={more} />
					</TouchableOpacity>
				</Tooltip>
			</View>
		);
	};

	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.PROFILE_HEADER}>
				<Header leftIcon="back" onLeftPress={() => navigation.goBack()} />
			</View>
			<View style={styles.POST_CONTAINER}>
				<View style={styles.RIGHT_SIDE_POST}>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<TouchableOpacity
							onPress={() => navigation.navigate('UserProfile', post.userID)}
						>
							<Image
								source={{ uri: post.user.avatarImageURL }}
								style={{
									resizeMode: 'contain',
									height: 60,
									width: 60,
									marginRight: 5,
									// flex: 1,
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate('UserProfile', post.userID)}
						>
							<Text
								preset="header"
								style={{
									fontSize: 18,
									margin: 5,
								}}
							>
								{post.user.username}
							</Text>
						</TouchableOpacity>
					</View>

					<Text
						preset="default"
						style={{
							fontSize: 18,
							margin: 5,
						}}
					>
						{post.description}
					</Text>
					<View style={styles.INTERACTIONS}>
						<TouchableOpacity
							style={styles.INTERACTIONS_BUTTONS}
							onPress={() => onLike()}
						>
							{myLikes === null || myLikes === undefined ? (
								<Image source={unliked} style={styles.BUTTON_IMAGE} />
							) : (
								<Image source={liked} style={styles.BUTTON_IMAGE} />
							)}
							<Text style={styles.BUTTON_TEXT}>{likesCounts} </Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.INTERACTIONS_BUTTONS}
							onPress={() =>
								// reusing new post screen to create a comment for the current post
								// new post will need to be sent the current post props
								navigation.navigate('NewPost', { comment: post })
							}
						>
							<Image source={comment} style={styles.BUTTON_IMAGE} />
							<Text style={styles.BUTTON_TEXT}>{commentCnt} </Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View>
				<FlatList
					data={comments}
					renderItem={({ item }) => renderPosts(item)}
					keyExtractor={(user) => String(user.id)}
					style={{ height: '100%' }}
				/>
			</View>
		</Screen>
	);
};

export default PostDetailsScreen;
