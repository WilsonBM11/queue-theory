import { useNavigate } from 'react-router-dom';

export const useDependencies = () => {
	const navigate = useNavigate();

	const items = [
		{ key: 0, label: 'Home', url: '/' },
		{ key: 1, label: 'M/M/1', url: '/MM1' },
		{ key: 2, label: 'M/M/m', url: '/' },
		{ key: 3, label: 'M/D/1', url: '/' },
		{ key: 4, label: 'M/M/1 FF', url: '/' },
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
