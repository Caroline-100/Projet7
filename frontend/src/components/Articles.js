import React from "react";

import { useHistory } from "react-router-dom";

function Articles(props) {
  let history = useHistory();
  
  function handleClick(event) {
    console.log(typeof event.target.value);
    localStorage.setItem('value', event.target.value );
    history.push(`/DisplayOneProduct`);
  }
  return (
    <li key={props.id} value={props.id}>
      <div className='article-top'>
      <h1 className='inherited'>createdAt : {props.createdAt}</h1>
      <h2>text: {props.text}</h2>
      <h3>PersonId : {props.PersonId}</h3>
      <h4>updateAt : {props.updatedAt}</h4>
      <div className='buttons'>
      <button onClick={handleClick} className={props.id} value={props.id}>
      Share</button>
      </div>
      </div>
    </li>
  );
}
export default Articles;
