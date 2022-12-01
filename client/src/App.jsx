import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import SideBar from './components/SideNav';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';
import Hero from "./components/Hero.jsx";
import Leave from "./components/Leave.jsx";
import { Routes, Route } from "react-router-dom"
import { Stack } from '@mui/system';




function App() {
  return (
    <>
      <Stack direction={"row"}>
        {/* <Navbar /> */}
        {/* if (window.location.pathname != "/") { */}
          <SideBar />
        {/* } */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="/view/:id" element={<Details />} />
          <Route exact path="/leave" element={<Leave />} />
        </Routes>
      </Stack>

    </>
  );
}

export default App;






