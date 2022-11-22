import './App.css';
import Navbar from './components/Navbar/Navbar';
import navbarData from './components/Navbar/data';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Welcome title="Santiago Lobo" subTitle="React developer" buttonText="Check my work!"/>
      <Navbar data={navbarData} />
      <About />
    </div>
  );
}

export default App;
