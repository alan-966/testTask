import { Bonuses, Delivery, Plus, Support, Travel } from '../../../../assets/svg';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Card } from '../../../../components';
import { MOCK_CARDS } from '../../mock';
import { FC } from 'react';
import styles from './styles';

const ListHeader: FC<Props> = () => (
	<View>
		<View style={[styles.iconBtnsContainer, styles.mT24]}>
			<TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
				<Travel />
				<Text style={styles.iconBtnText}>Travel</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
				<Delivery />
				<Text style={styles.iconBtnText}>Delivery</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
				<Bonuses />
				<Text style={styles.iconBtnText}>Bonuses</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
				<Support />
				<Text style={styles.iconBtnText}>Support</Text>
			</TouchableOpacity>
		</View>
		<ScrollView horizontal contentContainerStyle={[styles.svContainer, styles.mT24]}>
			{MOCK_CARDS.map(item => (
				<Card key={item.id} {...item} />
			))}
			<TouchableOpacity style={styles.plusBtn} activeOpacity={0.7}>
				<Plus />
			</TouchableOpacity>
		</ScrollView>
		<View style={[styles.chanksContainer, styles.mT24]}>
			<View style={styles.labelsContainer}>
				<Text style={styles.labelMainText}>Expenses in June</Text>
				<Text style={styles.labelSecondaryText}>$5,091</Text>
			</View>
			<View style={styles.progressContainer}>
				<View style={[styles.progress, { flex: 0.34, backgroundColor: '#CC3F02' }]} />
				<View style={[styles.progress, { flex: 0.25, backgroundColor: '#FE5900' }]} />
				<View style={[styles.progress, { flex: 0.24, backgroundColor: '#FF9332' }]} />
				<View style={[styles.progress, { flex: 0.17, backgroundColor: '#FFD8A5' }]} />
			</View>
		</View>
	</View>
);

export default ListHeader;

type Props = {};
