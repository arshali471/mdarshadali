// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navb from './Components/Navb';
import About from './Components/About';
import Work from './Components/Work';
import Projects from './Components/Projects';
import Little_more from './Components/Little_more';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Title from './Components/Title';

function App() {
  return (
    <div className="App">
      <Title/>
      <Navb />
      <About/>
      <Work/>
      <Projects/>
      <Little_more/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
