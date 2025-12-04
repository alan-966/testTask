import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 57,
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleText: {
		flex: 1,
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 21,
		fontFamily: FONTS.medium,
	},
	btnContainer: {
		width: 24,
		height: 24,
	},
});
