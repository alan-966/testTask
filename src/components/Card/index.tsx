import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { FC } from 'react';
import styles from './styles';

const Card: FC<Prop> = ({ Icon, bgSource, sum, type, cardNumber }) => {
	return (
		<TouchableOpacity activeOpacity={0.7}>
			<ImageBackground style={styles.container} source={bgSource}>
				<Icon />
				<Text style={styles.mainText}>{sum}</Text>
				<View style={styles.descriptionContainer}>
					<Text style={styles.secondaryText}>{type}</Text>
					<Text style={styles.secondaryText}>{cardNumber}</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
};

export default Card;

type Prop = {
	Icon: FC;
	bgSource?: ImageSourcePropType;
	sum: string;
	type: string;
	cardNumber: string;
};
