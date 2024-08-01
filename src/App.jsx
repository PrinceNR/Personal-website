import {
  About,
  Footer,
  Header,
  Skills,
  Testmonials,
  Work,
} from "./cantainer";

import { Navbar } from "./components";
import './App.scss'

function App() {
  return (
    <>
      <div className="app">
        <Navbar/>
        <Header/>
        <Testmonials />
        <About/>
        <Work/>
        <Skills/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
