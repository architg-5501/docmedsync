import './App.css';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import Home from './pages/home';
import Dasboard from './pages/dashboard/dasboard';
import { Nav } from './components/navbar/navbar'
import { Footer } from './components/footer';
import {
  Routes,
  Route,
} from "react-router-dom";

import Owner from './pages/dashboard/Owner/Owner';


const lightTheme = createTheme({
  type: 'light'

})

const darkTheme = createTheme({
  type: 'dark'

})





function App() {

  const darkMode = useDarkMode(false);
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme} >
      <Nav />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/about" element={<Owner />} />


      </Routes>
      
      <Footer/>

    </NextUIProvider>
  );
}

export default App;
