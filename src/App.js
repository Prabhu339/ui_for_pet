
import './App.css';
  import 'animate.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Start from './Components/Start';
import Navbar from './Components/Navbar';
import Routing from './Components/Routing';
import Footer from './Components/Footer';
import { createContext, useState } from 'react';

export const loginCheck=createContext();

function App() {
  const [token,setToken]=useState("")
  return (
    <div>
    <loginCheck.Provider value={[token,setToken]}>
    <Start/>
    <Navbar/>
    <Routing/>
    <Footer/>
    </loginCheck.Provider>
    </div>
  );
}

export default App;
