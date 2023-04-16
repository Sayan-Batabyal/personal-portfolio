import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Home from "./components/Home"



function App() {

  return (
   
    <div className="App w-full min-h-screen bg-black">
      <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/project" element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App
