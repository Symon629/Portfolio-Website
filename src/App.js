import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import MainSection from './components/MainSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <MainSection />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
