import React from "react";
import Articles from './Articles';
import { Form,Button } from 'react-bootstrap';
import Share from "./Share";

// import LogINorLogOUT from './LogINorLogOUT'
class DisplayOneProduct extends React.Component {
    constructor() {
        super();
        this.state={
            value:'test',
            array:null,
            comment:'',
            id:null,
            datas:null,
        }
        this.handlechange = this.handlechange.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.reloadPage = this.reloadPage.bind(this)

    }
    async componentDidMount() {
        const option = {};
        const id = localStorage.getItem('value');
        const token = localStorage.getItem('datee');
        option.headers = {
           authorization:'Bearer ' + token,'Content-Type' :'application/json'
        }
        const url = `http://localhost:3004/posts/${id}`;
        const response = await fetch(url,option);
        const data = await response.json();
        console.log("data", data);
            const element  = 
             <Articles key={data.id.toString()} 
                    onclick={this.clickOnchange} 
                    title={data.title}
                    id={data.id}
                    text={data.text}
                    data={data.data}
                    updatedAt={data.updatedAt}
                    PersonId={data.PersonId} 
                    createdAt={data.createdAt} />;
        this.setState({
            array: element ,
            id:data.id
        })   
        option.headers = {authorization: `Bearer ${token}`};
        const res = await fetch(`http://localhost:3004/posts/${id}/comments/${id}`, option)

        const data_comment = await res.json();
        const elements  = data_comment.map((comment) => {
            return <div>
            <Share key={comment.id.toString()}
            id={comment.id}
            text={comment.text}
            updatedAt={comment.updatedAt}
            PersonId={comment.PersonId} 
            PostId={comment.PostId} 
            createdAt={comment.createdAt}
            />
            </div>
        })
        this.setState({datas: elements})
    }
    handlechange(event)  {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }
    submitComment (event) {
        event.preventDefault();
        const comment =this.state.comment; 
        const id = localStorage.getItem('value');
        console.log({comment});
        const token = localStorage.getItem('datee');
        fetch(`http://localhost:3004/posts/${id}/comments`,
        {
            method:'POST',
            credentials:"same-origin",
            headers:{authorization:'Bearer ' + token, 'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({text : `${comment}`})
        }).then((res)=> {
            console.log("new comment ", res);
        }).catch((error)=> {
            console.error(error);
        })

    }
    reloadPage() {
        window.location.reload(false)
    }
    render() {
        return (
            <div>
                <p className='post'>
                    {this.state.array}
                </p>
                <div className='comments_space'>
                    <form onSubmit={this.submitComment}>
                    {/* <h4>Comments en tant que {this.state.id}</h4> */}
                    {/* <textarea className='comments_text' */}
                    <Form.Control as="textarea"
                    type='comment'
                    value={this.state.comment}
                    style={{ height: '100px', width: '36em'}}
                    name='comment'
                    onChange={this.handlechange}/>
                    {/* </textarea> */}
                    <Button 
                    onClick={this.reloadPage}>Comment</Button>
                    </form>
                    {/* display comment for this post */}
                    <div>
                        {this.state.datas}
                    </div>
                </div>
            </div>
        )
    }

}

export default DisplayOneProduct;