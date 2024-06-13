import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import NavBar from './components/NavBar/NavBar';
import MM1 from './pages/MM1/MM1';

function App() {
	// BrowserRouter es una libreria
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<Main />}></Route>
					<Route path='/MM1' element={<MM1 />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
