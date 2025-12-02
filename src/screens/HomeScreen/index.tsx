import { SafeAreaView } from 'react-native-safe-area-context';
import { SectionList, Text, View } from 'react-native';
import { OperationCard } from '../../components';
import { MOCK_DATA } from './mock';
import styles from './styles';

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<SectionList
				sections={MOCK_DATA}
				keyExtractor={item => item.id}
				ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
				renderItem={({ item }) => <OperationCard {...item} />}
				renderSectionHeader={({ section: { title } }) => (
					<Text style={styles.sectionText}>{title}</Text>
				)}
				renderSectionFooter={() => <View style={{ height: 24 }} />}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;
