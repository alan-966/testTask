import { Mastercard } from '../../assets/svg';

export const MOCK_DATA = [
	{
		title: 'Today',
		data: [
			{
				id: '1',
				name: 'Matthew Billson',
				avatarSource: require('../../assets/img/Avatar.jpg'),
				statusName: 'Money Transfer',
				statusColor: '#CC3F02',
				sum: '$56.19',
				date: 'Jun 9, 12:08',
			},
		],
	},
	{
		title: 'Yesterday',
		data: [
			{
				id: '2',
				name: 'Starbucks',
				avatarSource: require('../../assets/img/Avatar.jpg'),
				statusName: 'Food',
				statusColor: '#CC3F02',
				sum: '$122.47',
				date: 'Jun 8, 19:21',
			},
			{
				id: '3',
				name: 'Netflix',
				avatarSource: require('../../assets/img/Avatar.jpg'),
				statusName: 'Entertainment	',
				statusColor: '#FF9332',
				sum: '$13.17',
				date: 'Jun 8, 08:53',
			},
		],
	},
];

export const MOCK_CARDS = [
	{
		id: '1',
		Icon: Mastercard,
		bgSource: require('../../assets/img/CardBG1.jpg'),
		sum: '$4,098.12',
		type: 'Debit',
		cardNumber: '•• 4385',
	},
	{
		id: '2',
		Icon: Mastercard,
		bgSource: require('../../assets/img/CardBG2.jpg'),
		sum: '$14.71',
		type: 'Virtual',
		cardNumber: '•• 9081',
	},
];
