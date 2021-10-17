import React from "react";
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
    // this.componentDidMount = this.componentDidMount.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
    }).then(() => console.log("goods start"));
  }

  render() {
    return (
      <main className="log">
        <h3>Sign in to your account</h3>
        <form onSubmit={this.submit}>
          <div className="form-div">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              className="name"
              value={this.state.email}
              name="email"
              required
              minLength="4"
              size="100"
              onChange={this.handleChange}
            />
            <p>
              {this.state.email} , {this.state.password} , {this.state.username}
            </p>
          </div>
          {/* form username */}
          <div className="form-div">
            <label htmlFor="name">Username</label>
            <input
              htmlFor="username"
              name="username"
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
          <div>
            <input
              name="register"
              className="input-Valid"
              type="submit"
              value="Valid"
            ></input>
          </div>
        </form>
      </main>
    );
  }
}

export default SignUp;
