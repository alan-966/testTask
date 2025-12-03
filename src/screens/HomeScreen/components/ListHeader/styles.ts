import { StyleSheet } from 'react-native';
import { FONTS } from '../../../../constants';

export default StyleSheet.create({
	container: {},
	iconBtnsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	iconBtn: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
		width: 64,
		height: 64,
	},
	iconBtnText: {
		color: '#FFFFFF',
		fontSize: 14,
		fontFamily: FONTS.medium,
	},
	chanksContainer: {
		gap: 16,
		marginBottom: 32,
	},
	labelsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	labelMainText: {
		color: '#FFFFFF',
		fontSize: 21,
		fontFamily: FONTS.medium,
	},
	labelSecondaryText: {
		color: '#AEAEAE',
		fontSize: 18,
		fontFamily: FONTS.medium,
	},
	progressContainer: {
		flexDirection: 'row',
		gap: 2,
	},
	progress: {
		height: 8,
		borderRadius: 3,
	},
	plusBtn: {
		backgroundColor: '#0F0F0F',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 16,
		padding: 12,
	},
	svContainer: {
		gap: 8,
	},
	mT24: {
		marginTop: 24,
	},
});
