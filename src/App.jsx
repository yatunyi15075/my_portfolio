import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero";
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects.jsx';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 8rem; /* Add padding to all sides */
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
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
