import './App.css';
import Navbar from './components/Navbar/Navbar';
import navbarData from './components/Navbar/data';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Media from './components/Media/Media'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Welcome paragraph="Hello, my name is Santiago Lobo and i am a web developer :)" buttonText="Check my work!"/>
      <Navbar data={navbarData} />
      <About />
      <Media />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
