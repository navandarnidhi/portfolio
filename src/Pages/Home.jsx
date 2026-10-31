import Sidebar from "../Components/sidebar/Sidebar";
import HomeSection from "../Components/home/Home";
import About from "../Components/about/About";
import Resume from "../Components/resume/Resume";
import Portfolio from "../Components/portfolio/Portfolio";
import Contact from "../Components/contact/Contact";

const Home = () => (
  <>
    <Sidebar />
    <main className="main">
      <HomeSection />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  </>
);

export default Home;
