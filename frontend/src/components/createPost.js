
import React from "react";
// some other file

class CreatePost extends React.Component {
  constructor() {
    super();
    this.state = {
      title:"",
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
    const title = this.state.title;
    console.log({title});
    console.log({posts});
    const token = localStorage.getItem('datee');
    console.log({token});
    fetch("http://localhost:3004/posts", {
      method: "POST",
      credentials:'same-origin',
      headers: {authorization:'Bearer ' + token,'Content-Type' :'application/json' },
      mode:'cors',
      body: JSON.stringify({text : `${posts}`, title : `${title}`}),
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
  }
  render() {
    return (
      <div className='form'>
        <form className='form-div'
         onSubmit={this.submitPost}>

        <label className='title' htmlFor="post"> Create a Post : </label>
          <input
           type="title"
           placeholder="title"
           id="title"
           className='name'
           value={this.state.title}
           name="title"
            onChange={this.handleChangePost}
            /> 
          <label className='title'
          htmlFor="post"> Post : </label>
          <textarea
            type="post"
            id="post"
            placeholder="Texte"
            value={this.state.post}
            name="post"
             onChange={this.handleChangePost}
          ></textarea>
          <p>{this.state.post}</p>
          <button>Publish</button>
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
