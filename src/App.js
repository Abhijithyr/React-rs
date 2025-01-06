
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
// import Projects from './Component/Projects';
import Packages from './Component/Packages';
import CostEstimator from './Component/CostEstimator';
import Contact from './Component/Contact';
import WhatsappButton from './Component/WhatsappButton';
import ConcreteBlocks from './Component/ConcreteBlocks';
import RedClayBricks from './Component/RedClayBricks';
import CommericialPackage from './Component/CommericialPackage';
import VillaPackage from './Component/VillaPackage';
// import Project1 from './Component/Project1';

function App() {
  return (
    <>
    
    <Header />
    

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      {/* <Route path='/projects' element={<Projects/>} />
      <Route path='/projects/project1' element={<Project1 />} /> */}
      <Route path='/packages' element={<Packages/>} />
      <Route path='/package/concrete-blocks' element={<ConcreteBlocks />} />
      <Route path='/package/redclaybricks' element={<RedClayBricks/>} />
      <Route path='/package/commercialpackage' element={<CommericialPackage/>} />
      <Route path='/package/villapackage' element={<VillaPackage/>} />
      <Route path='/costestimator' element={<CostEstimator/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    <WhatsappButton />

    <Footer />
    </>
  );
}

export default App;
