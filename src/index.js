import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import { PrismicProvider } from '@prismicio/react';
import { client } from './prismic';

const theme = createTheme({
    palette: {
        primary: {
            light: '#739286',
            main: '#31423C',
        },
        text: {
            secondary: '#494949',
            primary: '#292929',
        },
    },
    typography: {
        fontFamily: ['Domine', 'serif'].join(',')
    }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PrismicProvider client={client}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </PrismicProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
