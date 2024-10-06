// src/styles/global.js

import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#007bff', // Couleur principale
  bg: '#f8f9fa', // Couleur de fond principale
  bgSecondary: '#e9ecef', // Couleur de fond secondaire
  text: '#212529', // Couleur du texte principal
  textSecondary: '#6c757d', // Couleur du texte secondaire
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: darken(${props => props.theme.primary}, 10%);
    }
  }
`;