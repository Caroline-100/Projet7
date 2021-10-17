import React from "react";

class Fetching extends React.Component {
  constructor() {
    super();
    this.state = {
      apiresponse: " badabboumm",
    };
  }

  componentDidMount() {
    fetch("http://localhost:3004/")
      .then((response) => response.json())
      .then((apiresponse) => console.log(apiresponse))
      .catch((err) => console.error(err));
  }

  render() {
    return <h1>Bouh Fetch</h1>;
  }
}

export default Fetching;
