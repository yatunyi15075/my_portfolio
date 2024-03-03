import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero";
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects.jsx';
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  body {
    background-color: #121212; 
    color: #ffffff; 
    font-family: 'Ariel', sans-serif;
  }

  
  .cars{
    background-color: #1e1e1e;
    color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 100vh;
  }
`;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 8rem; 
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
      <GlobalStyles />
        <Navbar />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ContentContainer>
        <Footer />
      </AppContainer>
    </Router>
  );
}

const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Achievements />
    </>
  );
}

export default App;
