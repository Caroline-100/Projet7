import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import files component
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



import Nav from "./components/navbar";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import CreatePost from "./components/createPost";
import DisplayPosts from "./components/DisplayPosts";
import DisplayOneProduct from './components/DisplayOneProduct'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isAuthentificated: false,
      user: null,
      token: null,
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(isAuthentificated) {
    this.setState({ isAuthentificated})
  }
  render() {
    //extra value 
    const { isAuthentificated } = this.state;
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/LogIn" render={() => !isAuthentificated ? <LogIn isLogin={this.handleLogin} /> : <DisplayPosts />} />
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
