import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, OperationCard } from '../../components';
import { SectionList, Text, View } from 'react-native';
import { ListHeader } from './components';
import { MOCK_DATA } from './mock';
import styles from './styles';

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Header style={styles.pH16} name={'Charlotte'} />
			<SectionList
				ListHeaderComponent={<ListHeader />}
				sections={MOCK_DATA}
				keyExtractor={item => item.id}
				contentContainerStyle={[styles.fl1, styles.pH16]}
				ItemSeparatorComponent={() => <View style={styles.itemSep} />}
				renderItem={({ item }) => <OperationCard {...item} />}
				renderSectionHeader={({ section: { title } }) => (
					<Text style={styles.sectionText}>{title}</Text>
				)}
				renderSectionFooter={() => <View style={styles.sectionFooter} />}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;
