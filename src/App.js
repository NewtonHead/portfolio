import './App.css';
import Navbar from './components/Navbar/Navbar';
import navbarData from './components/Navbar/data';

function App() {
  return (
    <Navbar data={navbarData} />
  );
}

export default App;
