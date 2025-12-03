import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	avatarContainer: {
		flexDirection: 'row',
		gap: 12,
	},
	chevronContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	nameText: {
		color: '#FFFFFF',
		fontSize: 16,
		fontFamily: FONTS.medium,
	},
});
