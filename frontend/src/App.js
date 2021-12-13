// import react library
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


//style
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import files components
// import Nav from "./components/navbar";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import CreatePost from "./components/createPost";
import DisplayPosts from "./components/DisplayPosts";
import DisplayOneProduct from './components/DisplayOneProduct'

// routes components 
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null,
      token: null,
    }
  }
  render() {
    return (
      <BrowserRouter>
        {/* <Nav /> */}
        <Switch>
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/LogIn" exact component={LogIn} />
          <Route path="/Main" exact component={Main} />
          <Route path="/CreatePost" exact component={CreatePost} />
          <Route path="/DisplayPosts" exact component={DisplayPosts} />
          <Route path='/DisplayOneProduct/:id' exact component={DisplayOneProduct} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
