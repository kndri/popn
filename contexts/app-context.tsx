import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppContextData = {
	unreadCount: number;
	updateUnreadCount(unreadCount: number): void;
};

export type AppProviderProps = {
	children?: any;
};

// Create the Auth Context with the data type specified
// and a empty object
const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [unreadCount, setUnreadCount] = useState<number>(0);

	// the AuthContext start with loading equals true
	// and stay like this, until the data be load from Async Storage
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Every time the App is opened, this provider is rendered
		// and call de loadStorage function.
		loadStorageData();
	}, []);

	async function loadStorageData(): Promise<void> {
		try {
			// Try get the data from Async Storage
			const appDataSerialized = await AsyncStorage.getItem('@AppData');
			if (appDataSerialized) {
				// If there are data, it's converted to an Object and the state is updated.
				const _appData = JSON.parse(appDataSerialized);
				setUnreadCount(_appData);
			}
		} catch (error) {
		} finally {
			// loading finished
			setLoading(false);
		}
	}
	const updateUnreadCount = (unreadCount: number) => {
		setUnreadCount(unreadCount);

		// Persist the data in the Async Storage
		// to be recovered in the next user session.
		AsyncStorage.setItem('@AppData', JSON.stringify(unreadCount));
	};

	return (
		// This component will be used to encapsulate the whole App,
		// so all components will have access to the Context
		<AppContext.Provider value={{ unreadCount, updateUnreadCount }}>
			{children}
		</AppContext.Provider>
	);
};

// A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useApp(): AppContextData {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useApp must be used within an AppProvider');
	}

	return context;
}

export { AppContext, AppProvider, useApp };
