import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './views/Home'
import SingleBlog from './views/SingleBlog'
import Contact from './views/Contact'
import Category from './views/CategoryPage'
import Page404 from './views/Page404'
import Navigation from './navigation/Navigation'
import Footer from './components/Footer'

export default function App() {
  return (

    <>
    <Router>
     < Navigation />
      <div>
        <Switch>
          <Route path="/contact"><Contact /></Route>
          <Route  path="/blog/:id"><SingleBlog/></Route>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/category/:id"> <Category /></Route>
          <Route path="*"> <Page404/> </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
    </>
  );
}

