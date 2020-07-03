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

import SignIn from './views/SignIn'
import SignUp from './views/SignUp'

import Dashboard from './views/Dashboard'
import EditBlog from './folder/dashboard/EditBlog'
import NewBlog from './folder/dashboard/CreateBlog'
import EditProfile from './folder/dashboard/EditProfile'
import Navigation from './navigation/Navigation'
import FlashMessages from './flashmessage/FlashMessageList'
import Footer from './components/Footer'
import RequireAuth from './navigation/PrivateRoute'
export default function App() {
  return (

    <>
    <Router>
     < Navigation />
     <FlashMessages />
      <div>
        <Switch>
          <Route path="/contact"><Contact /></Route>
          <Route  path="/blog/:id"><SingleBlog/></Route>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/category/:id"> <Category /></Route>
          <Route path='/dashboard'> <RequireAuth component={Dashboard} /> </Route>
          <Route path='/signup'><SignUp /></Route>
          <Route path='/signin'> <SignIn /></Route>
          <Route path='/editprofile'><RequireAuth component={EditProfile} /></Route>
          <Route path='/createblog'> <NewBlog /></Route>
          <Route path='/editBlog/:id'> <RequireAuth component= {EditBlog} /></Route>
          <Route path="*"> <Page404/> </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
    </>
  );
}

