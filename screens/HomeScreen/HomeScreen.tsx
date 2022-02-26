import * as React from 'react';
import { View } from 'react-native';

import { Screen, Header } from '../../components';
import Feed from '../../components/feed';
import NewPostButton from '../../components/new-post-button';

import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../src/graphql/queries';

import { RootTabScreenProps } from '../../types';
import styles from './Styles';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
	const [post, setPost] = React.useState<any>([]);

	const fetchPosts = async () => {
		const postData = await API.graphql(graphqlOperation(listPosts));
		setPost(postData);
	};

	React.useEffect(() => {
		fetchPosts();
	}, []);

	const renderTrending = () => {
		return <View>{<Feed post={post} />}</View>;
	};

	return (
		<Screen style={styles.CONTAINER}>
			<Header
				headerTx="Home"
				leftIcon="message"
				onLeftPress={() => navigation.navigate('Message')}
				rightIcon="search"
				onRightPress={() => navigation.navigate('UserSearch')}
			/>
			<View style={{ paddingTop: 20 }}>{renderTrending()}</View>
			<NewPostButton />
		</Screen>
	);
}
