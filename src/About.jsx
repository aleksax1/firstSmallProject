import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import NewsCard from './components/newCard/NewsCard.jsx';
import Nav from './components/nav/Nav.jsx';
import Footer from './components/footer/Footer.jsx';
function About() {
    return (
    <>
    <div className="">
    <Nav/>
    
    </div>
        <Footer/>
    </>
  );
}

export default About;
