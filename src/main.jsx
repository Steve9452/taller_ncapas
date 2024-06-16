import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createTheme, lighten } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import './App.css'
import App from './App.jsx'
const theme = createTheme({
  palette: {
    primary: {
      main: "#112554",
      light: lighten("#112554", 0.05), // Adjust the 0.2 value to control the lightness
      dark: lighten("#112554", 0.2), // Adjust the 0.7 value to control the darkness
    },
    secondary: {
      main: "#000A21",
    },
    info: {
      main: "#0288D1",
    },
    error: {
      main: "#AB0000",
    },
    background: {
      default: "#E0E4E9",
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <App />
  </ThemeProvider>
  </React.StrictMode>,
)
