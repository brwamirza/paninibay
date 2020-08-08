import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Footer from "./components/footer.component";
import OurChef from "./components/our-chef.component";
import OurStory from "./components/our-story.component";


function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <Route path="/" exact component={Home} />
      <Route path="/our-chef" exact component={OurChef} />
      <Route path="/our-story" exact component={OurStory} />
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
