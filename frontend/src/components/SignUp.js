import React from "react";
// import { Link } from "react-router-dom";
import Nav from "./navbar";
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.switchPage = this.switchPage.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  switchPage(event) {
    console.log(this.state.password === '');
    if (this.state.password === '') {
      const text = document.createElement('p');
      text.innerHTML = `Loading ....`
      // < Link to = '/Signup' > validate</Link >
      console.log("click button", event.target);
    }
  }
  submit(event) {
    event.preventDefault();
    // // alert(`${this.state.email} and  ${this.state.password}`);
    const data = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };
    console.log("this is", data);
    fetch("http://localhost:3004/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <>
        <Nav />
        <main className="log">
          <h3 className='title'>Sign in to your account</h3>
          <form onSubmit={this.submit}>
            <div className="form-div">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="name"
                value={this.state.email}
                name="email"
                required
                minLength="4"
                size="100"
                onChange={this.handleChange}
              />
            </div>
            {/* form username */}
            <div className="form-div">
              <label htmlFor="name">Username</label>
              <input
                htmlFor="username"
                name="username"
                placeholder="Username"
                type="username"
                value={this.state.username}
                className="username"
                required
                minLength="4"
                size="30"
                autoComplete="true"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-div">
              <label htmlFor="name">Password</label>
              <input
                htmlFor="password"
                name="password"
                placeholder="Password"
                type="password"
                value={this.state.password}
                className="password"
                required
                minLength="4"
                size="10"
                autoComplete="true"
                onChange={this.handleChange}
              />
            </div>
            <div className="div-btn-valid-register">

              <input
                name="register"
                onClick={this.switchPage}
                className="input-Valid"
                type="submit"
                value="Valid"

              />
              {
                (this.state.password) ?
                  console.log('test')
                  :
                  console.log('else')
              }
            </div>
          </form>
        </main>
      </>
    );
  }
}

export default SignUp;
