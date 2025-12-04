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

export const MOCK_NOTIFICATIONS = [
	{
		title: 'Today, 17 JunE',
		data: [
			{
				id: '1',
				imgSource: require('../../assets/img/Avatar2.jpg'),
				title: 'Sent to •• 2041',
				sum: '-$14.62',
				description: 'Debit •• 4385\n$3,987.5',
				date: '16 June 2025, 06:18· Payments',
				isSeen: false,
			},
		],
	},
	{
		title: 'YESTERDay, 16 JunE',
		data: [
			{
				id: '2',
				imgSource: require('../../assets/img/Operation1.png'),
				title: 'See our limited offer!',
				description: 'Would you like to visit new countries? Maybe it’s your time!',
				date: '16 June 2025, 23:08 · Travel',
				isSeen: true,
			},
			{
				id: '3',
				imgSource: require('../../assets/img/Operation2.png'),
				title: 'Sent to •• 2041',
				sum: '-$14.62',
				description: 'Debit •• 4385\n$3,987.5',
				date: '16 June 2025, 06:18· Payments',
				isSeen: true,
			},
		],
	},
	{
		title: '24 MARCH, 2025',
		data: [
			{
				id: '4',
				imgSource: require('../../assets/img/Operation3.png'),
				title: 'New login into account',
				description:
					'You have logged in from a new location:\niOS 26.0.1 · 109.255.84.7 · Spain',
				date: '24 March 2025, 15:44 · Security',
				isSeen: true,
			},
		],
	},
];
