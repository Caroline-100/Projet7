import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import files component
import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Nav from "./components/navbar";
import Todo from "./components/Apptodoitems";
import checkboxdisplay from "./components/chekboxdisplay";
import LogINorLogOUT from "./components/LogINorLogOUT";
import Fetching from "./components/fetching";
import CreatePost from "./components/createPost";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Route path="/LogIn" exact component={LogIn} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/Main" exact component={Main} />
        <Route path="/TodoItems" exact component={Todo} />
        <Route path="/Check" exact component={checkboxdisplay} />
        <Route path="/LogINorLogOUT" exact component={LogINorLogOUT} />
        <Route path="/Fetching" exact component={Fetching} />
        <Route path="/CreatePost" exact component={CreatePost} />
      </BrowserRouter>
    );
  }
}
// fetch('http://192.168.1.101:3000/products',{
//   method: 'post',
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
//   body: formdata
//   }).then(response => {
//     console.log("image uploaded")
//   }).catch(err => {
//     console.log(err)
//   })
// });

// class App extends React.Component {
//   constructor () {
//     super();
//     this.state = {
//       count: 0,
//     }
//     this.handleclick = this.handleclick.bind(this)
//   }

//   handleclick() {
//     // console.log('click')
//     this.setState(previusState => {
//       return {count : previusState.count + 1}
//     })
//     };

//   render() {
//     return (
//       <div>
//       <h1>{this.state.count}</h1>
//       <button onClick={this.handleclick}>click</button>
//       </div>
//     )
//   }
// }
// // #1
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Greeting />
//         <State />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Pauline",
//       age: "4",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age} years old</h3>
//       </div>
//     );
//   }
// }
// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false,
//     };
//   }
//   render() {
//     if (this.state.isLoggedIn) {
//       return (
//         <div>
//           <h1>You are currently logged (in) </h1>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h1>You are currently logged (out) </h1>
//         </div>
//       );
//     }
//   }
// }

// State !== Props;
// class State extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       answer: "yes",
//     };
//   }
//   render() {
//     return <h1>{this.state.answer}</h1>;
//   }
// }

// // #2
// class Header extends React.Component {
//   render(props) {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}!</p>
//       </header>
//     );
//   }
// }

// #3
// class Greeting extends React.Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;

//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon";
//     } else {
//       timeOfDay = "night";
//     }
//     return <h1>Good {timeOfDay} to you, Madam or sir, child!</h1>;
//   }
// }

// # handling events in react

// function App () {
//   return (
//     <div>
//     <img src='data:image/jpeg;base64,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' alt='bird'/>
//     <button onClick={()=>{console.log('i was clicked');}}> Click o me</button>
//     </div>
//   )
// }

export default App;
