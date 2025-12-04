import {
	Image,
	ImageSourcePropType,
	StyleProp,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
	ViewStyle,
} from 'react-native';
import { FC } from 'react';
import styles from './styles';

const NotificationCard: FC<Props> = ({
	imgSource,
	title,
	sum,
	description,
	date,
	isSeen,
	...props
}) => {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
			<Image style={styles.image} source={imgSource} />
			<View style={styles.textContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>{title}</Text>
					{!!sum && <Text style={styles.sumText}>{sum}</Text>}
				</View>
				<Text style={styles.descriptionText}>{description}</Text>
				<Text style={styles.dateText}>{date}</Text>
			</View>
			{!isSeen && <View style={styles.badge} />}
		</TouchableOpacity>
	);
};

export default NotificationCard;

type Props = TouchableOpacityProps & {
	style?: StyleProp<ViewStyle>;
	imgSource?: ImageSourcePropType;
	title?: string;
	sum?: string;
	description?: string;
	date?: string;
	isSeen?: boolean;
};
