import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import files component
import "./App.css";
import Nav from "./components/navbar";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import LogINorLogOUT from "./components/LogINorLogOUT";
import CreatePost from "./components/createPost";
import DisplayPosts from "./components/DisplayPosts";
import DisplayOneProduct from './components/DisplayOneProduct'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />

        <Route path="/LogIn" exact component={LogIn} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/Main" exact component={Main} />
        <Route path="/LogINorLogOUT" exact component={LogINorLogOUT} />
        <Route path="/CreatePost" exact component={CreatePost} />    
        <Route path="/DisplayPosts" exact component={DisplayPosts} />  
        <Route path="/DisplayOneProduct" exact component={DisplayOneProduct}/>          
      </BrowserRouter>
    );
  }
}
export default App;
