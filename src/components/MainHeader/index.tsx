import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { FC } from 'react';
import styles from './styles';

const MainHeader: FC<Props> = ({
	title,
	style,
	Append,
	Preppend,
	onLeftBtnPress = () => {},
	onRightBtnPress = () => {},
}) => {
	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity
				style={styles.btnContainer}
				activeOpacity={0.7}
				onPress={onLeftBtnPress}
			>
				{!!Append && <Append />}
			</TouchableOpacity>
			<Text style={styles.titleText} numberOfLines={2}>
				{title}
			</Text>
			<TouchableOpacity
				style={styles.btnContainer}
				activeOpacity={0.7}
				onPress={onRightBtnPress}
			>
				{!!Preppend && <Preppend />}
			</TouchableOpacity>
		</View>
	);
};

export default MainHeader;

type Props = {
	title?: string;
	style?: StyleProp<ViewStyle>;
	Append?: FC;
	Preppend?: FC;
	onLeftBtnPress?: () => void;
	onRightBtnPress?: () => void;
};
