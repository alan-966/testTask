import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants';

export default StyleSheet.create({
	container: {
		gap: 12,
		flexDirection: 'row',
	},
	image: {
		borderRadius: 16,
		width: 42,
		height: 42,
	},
	textContainer: {
		gap: 6,
		flex: 1,
		// backgroundColor: 'red',
	},
	titleContainer: {
		gap: 4,
	},
	titleText: {
		color: '#FFFFFF',
		fontSize: 14,
		fontFamily: FONTS.medium,
	},
	sumText: {
		color: '#FE5900',
		fontSize: 21,
		fontFamily: FONTS.semibold,
	},
	descriptionText: {
		color: '#AEAEAE',
		fontSize: 14,
		fontFamily: FONTS.regular,
	},
	dateText: {
		color: '#616161',
		fontSize: 12,
		fontFamily: FONTS.regular,
	},
	badge: {
		margin: 6,
		width: 6,
		height: 6,
		borderRadius: '100%',
		backgroundColor: '#FE5900',
	},
});
