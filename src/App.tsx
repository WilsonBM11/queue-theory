import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import NavBar from './components/NavBar/NavBar';
import MM1 from './pages/MM1/MM1';
import MMm from './pages/MMm/MMm';
import MD1 from './pages/MD1/MD1';
import MM1PF from './pages/MM1PF/MM1PF';

function App() {
	return (
		<>
			<BrowserRouter basename="/queue-theory">
				<NavBar />
				<Routes>
					<Route path='/' element={<Main />}></Route>
					<Route path='/MM1' element={<MM1 />}></Route>
					<Route path='/MMm' element={<MMm />}></Route>
					<Route path='/MD1' element={<MD1 />}></Route>
					<Route path='/MM1PF' element={<MM1PF />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
