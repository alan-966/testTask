import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Avatar, Chevron, QrCode } from '../../assets/svg';
import { FC } from 'react';
import styles from './styles';

const Header: FC<Props> = ({ name, style }) => (
	<View style={[styles.container, style]}>
		<TouchableOpacity style={styles.avatarContainer} activeOpacity={0.7}>
			<Avatar />
			<View style={styles.chevronContainer}>
				<Text style={styles.nameText}>{name}</Text>
				<Chevron />
			</View>
		</TouchableOpacity>
		<TouchableOpacity activeOpacity={0.7}>
			<QrCode />
		</TouchableOpacity>
	</View>
);

export default Header;

type Props = {
	style?: StyleProp<ViewStyle>;
	name: string;
};
