
import styled, { createGlobalStyle } from 'styled-components'

//Global styles
const GlobalStyles = createGlobalStyle`
  body {
    background-color: #121212; /* background color*/
    color: #ffffff; /* color of texts */
    font-family: 'Ariel', sans-serif;
  }

  /*Darker cerd styles*/
  .cars{
    background-color: #1e1e1e;
    color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 100vh;
  }
`;

export default GlobalStyles;