import React from "react";
import { Button } from 'react-bootstrap';
class CreatePost extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      post: "",
      image: [],
      imageTest: null,
    }
    this.handleChangePost = this.handleChangePost.bind(this);


  }
  handleChangePost(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  submit(event) {
    event.preventDefault();

    console.log('submit');
  }




  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>
            <input onChange={this.handleChangePost}
              type='title'
              name='title'
              placeholder='title'
              value={this.state.title} />
          </label>
          <label>
            <textarea onChange={this.handleChangePost}
              type='post'
              name='post'
              placeholder='post'
              value={this.state.post}>
            </textarea>
          </label>
          <label>
            <input
              type='file'
              name='file'
            />
          </label>
          <Button variant='success'
            name="post"
            className="input-Valid"
            type="submit"
            value="Valid"
          >Valid</Button>
        </form>
      </div>
    )
  }
}

export default CreatePost;

