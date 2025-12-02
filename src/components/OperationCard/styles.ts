import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants';

export default StyleSheet.create({
	container: {
		backgroundColor: '#0F0F0F',
		padding: 16,
		borderRadius: 16,
		gap: 12,
		flexDirection: 'row',
	},
	avatar: {
		borderRadius: 12,
		width: 36,
		height: 36,
	},
	mainText: {
		color: '#FFFFFF',
		fontSize: 14,
		fontFamily: FONTS.medium,
	},
	secondaryText: {
		color: '#B3B3B3',
		fontSize: 14,
		fontFamily: FONTS.regular,
	},
	descriptionContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
	},
	firstContainer: {
		flex: 1,
		gap: 4,
	},
	secondContainer: {
		gap: 4,
		alignItems: 'flex-end',
	},
	status: {
		width: 6,
		height: 6,
		borderRadius: '100%',
		backgroundColor: '#CC3F02',
	},
});
