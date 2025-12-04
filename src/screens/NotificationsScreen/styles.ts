import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#060503',
	},
	pH16: {
		paddingHorizontal: 16,
	},
	fl1: {
		flex: 1,
	},
	sectionText: {
		color: '#AEAEAE',
		fontSize: 12,
		paddingBottom: 10,
		fontFamily: FONTS.semibold,
		textTransform: 'uppercase',
		marginVertical: 16,
	},
	itemSep: {
		marginTop: 24,
	},
	sectionFooter: {
		marginTop: 16,
		height: 1,
		backgroundColor: '#1F1F1F',
	},
});
