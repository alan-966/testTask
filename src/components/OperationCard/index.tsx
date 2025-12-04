import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from 'react-native';
import { FC } from 'react';
import styles from './styles';

const OperationCard: FC<Props> = ({
	name,
	avatarSource,
	statusName,
	statusColor,
	sum,
	date,
	...props
}) => {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
			<Image style={styles.avatar} source={avatarSource} />
			<View style={styles.firstContainer}>
				<Text style={styles.mainText}>{name}</Text>
				<View style={styles.descriptionContainer}>
					<View style={[styles.status, { backgroundColor: statusColor }]} />
					<Text style={styles.secondaryText}>{statusName}</Text>
				</View>
			</View>
			<View style={styles.secondContainer}>
				<Text style={styles.mainText}>{sum}</Text>
				<Text style={styles.secondaryText}>{date}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default OperationCard;

type Props = TouchableOpacityProps & {
	name: string;
	avatarSource?: ImageSourcePropType;
	statusName: string;
	statusColor?: string;
	sum?: string;
	date?: string;
};
