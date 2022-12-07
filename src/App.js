import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './project/NavBar';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Home from './project/Home';
import FormEx from './form/FormEx';
function App() {
  return (
    <div className='App'>
    <FormEx/>
    <BrowserRouter>
    <Routes>
    <Route path="snd" element={<><ResponsiveAppBar></ResponsiveAppBar><Home/></>}/>
    <Route path="about" element={<AboutUs/>}/>
    <Route path="contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}


export default App;
