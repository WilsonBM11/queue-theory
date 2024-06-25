import { useNavigate } from 'react-router-dom';

export const useDependencies = () => {
	const navigate = useNavigate();

	const items = [
		{ key: 0, label: 'Home', url: '/' },
		{ key: 1, label: 'M/M/1', url: '/MM1' },
		{ key: 2, label: 'M/M/m', url: '/MMm' },
		{ key: 3, label: 'M/D/1', url: '/MD1' },
		{ key: 4, label: 'M/M/1 PF', url: '/MM1PF' },
	];

	const handleClick = (e: { key: string }) => {
		const { key } = e;
		navigate(items[+key].url);
	};

	return {
		items,
		handleClick,
	};
};
