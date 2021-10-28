
import React from "react";
// some other file

class CreatePost extends React.Component {
  constructor() {
    super();
    this.state = {
      post: "",
      image:null,

    };
    this.handleChangePost = this.handleChangePost.bind(this);
    this.submitPost = this.submitPost.bind(this);
    this.handleImage = this.handleImage.bind(this);
    // this.submitImage = this.submitImage.bind(this);
    this.clickChange = this.clickchange.bind(this);
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
    const token = localStorage.getItem('datee');
    console.log({token});
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
  handleImage(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log("image", img);
      this.setState({ image: img})
    }
  }
  clickchange(event) {
    console.log(event.target);
    console.log("something");
  }
  // submitImage(event) {
  //   event.preventDefault();
  //   // const files = event.target;
  //   const token = localStorage.getItem('datee');
  //   var myheaders = new Headers();
  //   myheaders.append('Accept','application/json');
  //   myheaders.append('authorization',`Bearer ${token}`)
  //   const formdata = new FormData();
  //   formdata.append('file', this.state.image);
  //   console.log(this.state.image);

  //   fetch("http://localhost:3004/images", {
  //     method: "POST",
  //     headers:myheaders,
  //     body:formdata,
  //     redirect:'follow',
  //   })
  //   .then(response => response.json())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  // }
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
             onChange={this.handleChangePost}
          ></textarea>
          <p>{this.state.post}</p>
          <button>Send Post</button>
        </form>
        <form onSubmit={this.submitImage}
        >
          <input type='file' id='file' name='image' 
          multiple
          onChange={this.handleImage}
          />
          <button onClick={this.clickchange}>Send image</button>
        </form>
      </div>
    );
  }
}
export default CreatePost;
