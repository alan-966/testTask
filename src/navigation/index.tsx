import { Analytics, Chats, History, Home, Payments } from '../assets/svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens';
import { FONTS } from '../constants';
import { FC } from 'react';

const Tab = createBottomTabNavigator();

const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarActiveTintColor: '#FE5900',
					tabBarInactiveTintColor: '#FFFFFF',
					tabBarStyle: {
						backgroundColor: '#060503',
						borderColor: '#060503',
					},
					tabBarLabelStyle: {
						fontFamily: FONTS.regular,
						fontSize: 12,
					},
				}}
			>
				<Tab.Screen
					name='Home'
					component={HomeScreen}
					options={{ tabBarIcon: ({ color }) => <Home color={color} /> }}
				/>
				<Tab.Screen
					name='Payments'
					component={HomeScreen}
					options={{ tabBarIcon: ({ color }) => <Payments color={color} /> }}
				/>
				<Tab.Screen
					name='History'
					component={HomeScreen}
					options={{ tabBarIcon: ({ color }) => <History color={color} /> }}
				/>
				<Tab.Screen
					name='Analytics'
					component={HomeScreen}
					options={{ tabBarIcon: ({ color }) => <Analytics color={color} /> }}
				/>
				<Tab.Screen
					name='Chats'
					component={HomeScreen}
					options={{ tabBarIcon: ({ color }) => <Chats color={color} /> }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
