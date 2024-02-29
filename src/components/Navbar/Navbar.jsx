import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import { images } from '../../constants';

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem; 
  }

  li {
    list-style: none;
    display: inline-block;
    border-radius: 8px;
    transition: 0.3s ease background-color;
    padding: 1rem;
  }

  li:hover {
    background-color: var(--deep-black);
  }

  img {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    width: 40px;
    height: 40px;
  }

  a {
    display: inline-block;
    font-family: 'RobotoMono Regular';
    font-size: 1.5rem;
    color: var(--gary-1);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: lightblue;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  margin-left: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: lightblue;
  }
`;

const Navbar = () => {
  return (
    <NavMenuStyles>
      <ul>
        <li><img src={images.logo} alt="logo" /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/technologies">Technologies</Link></li>
        <SocialIcons>
          <SocialIcon href="https://www.linkedin.com/"><FaLinkedin /></SocialIcon>
          <SocialIcon href="https://twitter.com/"><FaTwitter /></SocialIcon>
          <SocialIcon href="https://github.com/"><FaGithub /></SocialIcon>
          <SocialIcon href="https://www.youtube.com/"><FaYoutube /></SocialIcon>
        </SocialIcons>
      </ul>
    </NavMenuStyles>
  );
};

export default Navbar;
