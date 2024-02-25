import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Reserve from "./components/Reserve";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Award from "./components/Award";
import Feedbacks from "./components/Feedbacks";
import ChefQuote from "./components/ChefQuote";
import Social from "./components/Social";
import Vid from "./components/Vid";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Logo />
      <NavBar />
      <Intro />
      <About className="homePageAbout"/>
      <Reserve />
      <Menu className="homePageMenu" />
      <Award/>
      <Feedbacks/>
      <ChefQuote />
      <Social />
      <Vid />
      <Footer className="homePageContact"/>
    </div>
  );
}

export default App;
