import './App.css';
import Navbar from './components/Navbar/Navbar';
import navbarData from './components/Navbar/data';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div>
      <Welcome title="Santiago Lobo" subTitle="React Developer" buttonText="Check my work!"/>
      <Navbar data={navbarData} />
    </div>
  );
}

export default App;
