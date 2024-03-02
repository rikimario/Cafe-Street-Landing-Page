import Hero from "./components/Home";
import Nav from "./components/Navigation";
import Popular from "./components/Popular";
import HowTo from "./components/HowTo";
import About from "./components/AboutUs";
import SpecialMenu from "./components/SpecialMenu";
import NewsLetter from "./components/NewsLetter";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Popular />
      <HowTo />
      <About />
      <SpecialMenu />
      <NewsLetter />
    </>
  );
}
