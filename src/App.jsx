import { BrowserRouter, Route,  Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Home from "./components/Home"
import { AnimatePresence } from "framer-motion"
import Transition from "./components/Transition"




function App() {
  const location = useLocation();
  return (
   
    <div className="App w-full min-h-screen bg-black">
    <Navbar/>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}/> 
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/project" element={<Projects/>}/>
    </Routes> 
   
    </div>
  )
}

export default App
