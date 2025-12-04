import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainHeader } from '../../components';
import { Back, Info } from '../../assets/svg';
import { FONTS } from '../../constants';
import styles from './styles';
import AllTab from './AllTab';
import PaymentsTab from './PaymentsTab';

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
					},
					tabBarLabelStyle: {
						fontSize: 14,
						fontFamily: FONTS.regular,
						margin: 12,
					},
				}}
			>
				<Tab.Screen name={'All'} component={AllTab} />
				<Tab.Screen name={'Payments'} component={PaymentsTab} />
				<Tab.Screen name={'System'} component={PaymentsTab} />
				<Tab.Screen name={'Delivery'} component={PaymentsTab} />
				<Tab.Screen name={'Travel'} component={PaymentsTab} />
			</Tab.Navigator>
		</SafeAreaView>
	);
};

export default NotificationsScreen;
