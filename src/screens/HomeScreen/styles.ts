import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#060503',
	},
	fl1: {
		flex: 1,
	},
	pH16: {
		paddingHorizontal: 16,
	},
	sectionText: {
		color: '#FFFFFF',
		fontSize: 16,
		paddingBottom: 10,
		fontFamily: FONTS.medium,
	},
	itemSep: {
		marginTop: 4,
	},
	sectionFooter: {
		marginTop: 24,
	},
});
