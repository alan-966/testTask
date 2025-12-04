import { SectionList, Text, View } from 'react-native';
import { NotificationCard } from '../../components';
import { MOCK_NOTIFICATIONS } from '../HomeScreen/mock';
import styles from './styles';

const AllTab = () => {
	return (
		<SectionList
			sections={MOCK_NOTIFICATIONS}
			keyExtractor={item => item.id}
			contentContainerStyle={[styles.fl1, styles.pH16]}
			ItemSeparatorComponent={() => <View style={styles.itemSep} />}
			renderItem={({ item }) => <NotificationCard {...item} />}
			renderSectionHeader={({ section: { title } }) => (
				<Text style={styles.sectionText}>{title}</Text>
			)}
			renderSectionFooter={() => <View style={styles.sectionFooter} />}
		/>
	);
};

export default AllTab;
