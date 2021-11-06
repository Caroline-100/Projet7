import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Button } from 'react-bootstrap';

function Share(props) {

    function onclick(event){
        console.log(`${window.location.href}`);
    }
    return(
    <div className='article-top' key={props.id}>
      <h1 className='inherited'>createdAt : {props.createdAt}</h1>
      <h2>text: {props.text}</h2>
      <h3>PersonId : {props.PersonId}</h3>
      <h4>updateAt : {props.updatedAt}</h4>
      <CopyToClipboard text={window.location.href}>
        <Button onClick={onclick}>Link</Button>
      </CopyToClipboard>
    </div>
    )
}

export default Share