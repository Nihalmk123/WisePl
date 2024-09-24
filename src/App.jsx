import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Contactus from './Pages/Contactus'
import Programs from './Pages/Programs'
import Videos from './Pages/Videos'
import AdminDashboard from './Pages/AdminDashboard'

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/aboutus" element={ <AboutUs/>}/>
    <Route path="/contactus" element={<Contactus/>}/>
    <Route path="/programs" element={<Programs/>}/>
    <Route path="/videos" element={<Videos/>}/>
    <Route path="/admindashboard" element={<AdminDashboard/>}/> 
     </Routes>
    </>
  )
}

export default App
