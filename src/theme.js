import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
  body: '#F9F3DE',
  text: '#272424',
};

export const darkTheme = {
  body: '#272424',
  text: '#F9F3DE',
};
