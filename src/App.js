
import './App.css';
import {React, useEffect} from 'react';
import {Grid } from "@material-ui/core";

import ResponsiveAppBar from './components/ResponsiveAppBar'

import Footer from './components/Footer'
import Home from "./components/Home";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { CssBaseline } from '@mui/material';
import {Route, Routes} from "react-router-dom"

function App() {
  
  useEffect(() => {
    document.title = "Jamal Salvi";
  }, []);
  
  return (
    <>
    <CssBaseline/>
    <ResponsiveAppBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/aboutMe" element={<AboutMe/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>

    </>
  );
}

export default App;
