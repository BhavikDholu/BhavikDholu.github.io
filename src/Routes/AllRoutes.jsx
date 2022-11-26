import {Routes,Route} from "react-router-dom";


import React from 'react'
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default AllRoutes