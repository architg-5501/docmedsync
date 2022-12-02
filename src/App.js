import './App.css';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import Home from './pages/home';

import Dashboard from './pages/dashboard/dashboard';
import { Nav } from './components/navbar/navbar'
import Footer from './components/footer';
import {
  Routes,
  Route,
} from "react-router-dom";

import Owner from './pages/dashboard/Owner/Owner';

import PublicDashBoard from './pages/dashboard/Public/Public';
import Admin from './pages/dashboard/Admin/admin';
import Hospital from './pages/dashboard/Hospital/Hospital';
import PatientDashboard from './pages/dashboard/Patient/Patient';

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

        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} >
          <Route path="owner" element={<Owner />} />
          <Route path="public" element={<PublicDashBoard />} />
          <Route path="admin" element={<Admin />} />
          <Route path="hospital" element={<Hospital />} />
          <Route path="patient" element={<PatientDashboard />} />
        </Route>
        <Route exact path="/about" element={<Hospital />} />


      </Routes>

      <Footer />

    </NextUIProvider>
  );
}

export default App;
