import './App.css';
import Sidebar from './Components/sidebar/Sidebar';
import Home from './Components/home/Home';
import About from "./Components/about/About";
import Resume from './Components/resume/Resume';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};
export default App;
