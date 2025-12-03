import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants';

export default StyleSheet.create({
	container: {
		padding: 12,
		gap: 6,
		width: 148,
		borderRadius: 16,
		overflow: 'hidden',
	},
	mainText: {
		marginTop: 7,
		color: '#FFFFFF',
		fontSize: 14,
		fontFamily: FONTS.semibold,
	},
	secondaryText: {
		color: '#FFFFFF',
		fontSize: 14,
		fontFamily: FONTS.regular,
	},
	descriptionContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
});
