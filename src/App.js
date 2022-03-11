import { Home } from './pages/home.js'
import { Navbar } from './components/navbar/navbar.js'
import './global-styles.css'

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
		</div>
	)
}

export default App
