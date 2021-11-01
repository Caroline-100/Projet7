
import React from "react";


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
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  submit(event) {
    event.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    console.log("this is", data);
    const newLocal = 'http://localhost:3004/login';
    fetch(newLocal, {
      method: "POST",
      headers:{ 
        "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(response => response.json())
      .then((token)=> 
        { const datatoken = token;
          localStorage.setItem('datee', datatoken);
        }) 
  }

  render() {
    return (
      <main className="log">
        <h3 className='title'>Login in to your account</h3>
        <form onSubmit={this.submit}>
          <div className="form-div">
            <label htmlFor="name">Username</label>
            <input
              type="username"
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
              type="text"
              className="name"
              name="password"
              value={this.state.password}
              required
              minLength="4"
              size="10"
              onChange={this.handleChange}
            />
          </div>
          <div className="div-btn-valid-register">
            <input
              name="login"
              className="input-Valid"
              type="submit"
              value="Valid"
            />
          </div>
        </form>
        <p>
              {this.state.password} ,{this.state.username}
        </p>
      </main>
    );
  }
}

export default LogIn;
