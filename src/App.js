import './App.css';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { Nav } from './components/navbar/navbar';
import useDarkMode from 'use-dark-mode';
import { Footer } from './components/footer';
import { Hero } from './components/hero/index';
import { Features } from './components/features';





const lightTheme = createTheme({
  type: 'light'
 
})

const darkTheme = createTheme({
  type: 'dark'
  
})

const lightElegantTheme = createTheme({
  type: 'light',
  className: 'light-elegant',
  theme: {
    colors: {
      primary: '#000000',
      primaryLight: '#AAAAAA',
      success: '#a2a2a2'
    },
    radii: {
      md: '4px'
    }
  }
});

const lightRetroTheme = createTheme({
  type: 'light',
  className: 'light-retro',
  theme: {
    colors: {
      primary: '#FFD34E',
      primaryLight: 'transparent',
      error: '#EE457E'
    }
  }
});


function App() {
  
const darkMode = useDarkMode(false);
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightRetroTheme} >
      <div className="App">
        <Nav/>
        <Hero />
       <Features/>
        <Footer/>
      </div>
    </NextUIProvider>
  );
}

export default App;
