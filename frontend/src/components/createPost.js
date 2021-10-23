import React from "react";
// some other file

class CreatePost extends React.Component {
  constructor() {
    super();
    this.state = {
      post: "",
    };
    this.handleChangePost = this.handleChangePost.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }
  handleChangePost(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  submitPost(event) {
    event.preventDefault();
    const posts = this.state.post;
    console.log({posts});
    const transformPost = JSON.stringify(posts);
    const token = localStorage.getItem('datee');
    console.log({token});
    console.log({transformPost});
    fetch("http://localhost:3004/posts", {
      method: "POST",
      credentials:'same-origin',
      headers: {authorization:'Bearer ' + token,'Content-Type' :'application/json' },
      mode:'cors',
      body: JSON.stringify({text : `${posts}`}),
    })
    .then((response) => {
        console.log(" new Post ", response);
      })
      .catch((error)=> console.error(error))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitPost}>
          <label htmlFor="post"> Post : </label>
          <textarea
            type="post"
            id="post"
            value={this.state.post}
            name="post"
            placeholder="Write your post "
            onChange={this.handleChangePost}
          ></textarea>
          <p>{this.state.post}</p>
          <button>Send Post</button>
        </form>
      </div>
    );
  }
}
export default CreatePost;
