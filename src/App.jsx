import About from "./Components/about/About";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Skills from "./Components/skills/Skills";
import Services from "./Components/Services/Services";
// import Qualifications from "./Components/qualifications/Qualifications";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import Footor from "./Components/footor/Footor";
import Scroll from "./Components/scrollUp/Scroll";
import Portfolio from "./Components/portfolio/Portfolio";


function App() {
  return (
    <>
  
      <div className="divContainer">
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Portfolio />
          {/* <Qualifications /> */}
          <Testimonials />
          <Contact />
        </main>
        <Footor />
        <Scroll />
      </div>
    </>
  );
}

export default App;
