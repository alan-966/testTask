import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainHeader } from '../../components';
import { FONTS } from '../../constants';
import { Text } from 'react-native';
import styles from './styles';
import { Back, Info } from '../../assets/svg';

const Tab = createMaterialTopTabNavigator();

const NotificationsScreen = () => {
	return (
		<SafeAreaView style={styles.container} edges={['top']}>
			<MainHeader style={styles.pH16} title={'Notifications'} Append={Back} Preppend={Info} />
			<Tab.Navigator
				screenOptions={{
					tabBarScrollEnabled: true,
					tabBarActiveTintColor: '#FE5900',
					tabBarInactiveTintColor: '#AEAEAE',
					tabBarIndicatorStyle: {
						backgroundColor: '#FE5900',
					},
					tabBarStyle: {
						backgroundColor: 'transparent',
						// marginHorizontal: 16,
					},
					tabBarContentContainerStyle: {
						paddingHorizontal: 16,
					},
					sceneStyle: {
						backgroundColor: 'transparent',
					},
					tabBarItemStyle: {
						width: 'auto',
						padding: 0,
						minHeight: 0,
						// backgroundColor: 'red',
						// borderWidth: 1,
					},
					tabBarLabelStyle: {
						// flex: 1,
						fontSize: 14,
						fontFamily: FONTS.regular,
						margin: 12,
					},
				}}
			>
				<Tab.Screen name='All' component={HomeScreen} />
				<Tab.Screen name='Payments' component={ProfileScreen} />
				<Tab.Screen name='System' component={ProfileScreen} />
				<Tab.Screen name='Delivery' component={ProfileScreen} />
				<Tab.Screen name='Travel' component={ProfileScreen} />
			</Tab.Navigator>
		</SafeAreaView>
	);
};

const HomeScreen = () => {
	return (
		<Text style={{ color: '#FFF' }}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias rem aut nobis
			tempora doloremque optio assumenda, ad architecto molestiae facilis praesentium, ipsum
			unde sint, blanditiis esse? Necessitatibus, numquam reiciendis!
		</Text>
	);
};

const ProfileScreen = () => {
	return (
		<Text style={{ color: '#FFF' }}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias rem aut nobis
			tempora doloremque optio assumenda, ad architecto molestiae facilis praesentium, ipsum
			unde sint, blanditiis esse? Necessitatibus, numquam reiciendis!
		</Text>
	);
};

export default NotificationsScreen;
