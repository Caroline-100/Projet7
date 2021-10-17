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
    fetch("http://localhost:3004/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("goods reconnect");
      // window.location.href = "/main";
    });
  }

  render() {
    return (
      <main className="log">
        <h3>Login in to your account</h3>
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
            <p>
              {this.state.password} ,{this.state.username}
            </p>
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
          <div>
            <input
              name="login"
              className="input-Valid"
              type="submit"
              value="Valid"
            />
          </div>
        </form>
      </main>
    );
  }
}

export default LogIn;
