
import React from "react";
import { Button } from 'react-bootstrap';

import Nav from './navbar'


class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    // register change password and name login page
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submit(event) {
    event.preventDefault();
    console.log('submit')
    const newLocal = 'http://localhost:3004/login';
    fetch(newLocal, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),

    }).then(response => response.json())
      .then((dataToken) => {
        localStorage.setItem('datee', dataToken);
        if (localStorage.getItem('datee') === '[object Object]') {
          localStorage.clear()
          this.props.history.push('/Login')
        }
        else {
          if (localStorage.getItem('datee')) {
            this.props.history.push('/DisplayPosts')
          }
        }
        console.log(localStorage)
        // else if (!localStorage.getItem('datee', dataToken)) {
        //   this.props.history.push('/Login')
        // }
      }).catch((error) => {
        console.error(error)
      })
  }

  render() {

    return (
      <>
        <Nav />
        <main className="log">
          <h3 className='title'>Login in to your account</h3>
          <form onSubmit={this.submit}>
            <div className="form-div">
              <label htmlFor="name">Username</label>
              <input
                type="username"
                autoComplete='true'
                className="name"
                value={this.state.username}
                name="username"
                required
                minLength="4"
                size="100"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-div">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                autoComplete='true'
                className="name"
                name="password"
                value={this.state.password}
                required
                minLength="4"
                size="10"
                onChange={this.handleChange}
              />
            </div>
            {/* after submit, check
               if localStorage
                  return  displaypost
              else 
                  return login         
          */}
            <div className="div-btn-valid-register">
              <Button variant='success'
                name="login"

                className="input-Valid"
                type="submit"
                value="Valid"
              >Valid</Button>
              {/* 
              <Link to='/DisplayPosts'> Valid</Link></Button> */}
            </div>
          </form>
          <p>
            {this.state.password} ,{this.state.username}
          </p>

        </main>
      </>
    );
  }
}

export default LogIn;
