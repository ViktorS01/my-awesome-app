import { createGlobalStyle } from 'styled-components';
import { Colors } from './constants/colors';

export const GlobalStyle = createGlobalStyle` 
  
  *{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }
  }
  body {
    margin: 0;
    padding: 0;
    position: relative;
    color: ${Colors.BLACK};
  }
  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    outline: none !important;
    color: inherit;
  }

  p, h1, h2, h3, h4, h5, h6, ul, li {
    padding: 0;
    margin: 0;
  }
  img{
    width: auto;
    height: auto;
  }

  button {
    border: none; 
    outline: none;
    cursor: pointer;
    
  }
  textarea:focus, input:focus{
    outline: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px #0000 inset;
    -webkit-transition: background-color 5000s ease-in-out 0s;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
