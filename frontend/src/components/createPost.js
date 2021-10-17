import React from "react";

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
    const posts = { post: this.state.post };
    console.log("this is a post", posts);
    fetch("http://localhost:3004/posts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(posts),
    }).then(() => {
      console.log(" new Post ", posts);
      // window.location.href = "/main";
    });
    //     const data = { post: this.state.post };
    //     console.log("this is ", data);
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
