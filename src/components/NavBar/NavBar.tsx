/* eslint-disable react/react-in-jsx-scope */
import { Menu } from 'antd';
import { useDependencies } from './hooks';

const NavBar = () => {
	const { items, handleClick } = useDependencies();

	return (
		<Menu
			theme='light'
			mode='horizontal'
			onClick={handleClick}
			defaultSelectedKeys={['0']}
			items={items}
			style={{ width: '100%' }}
		/>
	);
};

export default NavBar;
