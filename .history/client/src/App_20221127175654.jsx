import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"




function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          {/* <Route exact path="/">
        <Home />
      </Route> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/view/:id" component={Details} />
        </Routes>
      </Router>
    </>
  );
}

export default App;






