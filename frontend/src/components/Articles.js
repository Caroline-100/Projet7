import React from "react";

import { useHistory } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
// import Button from "@restart/ui/esm/Button";
function Articles(props) {
  let history = useHistory();


  function handleClick(event) {
    console.log(typeof event.target.value);
    localStorage.setItem('value', event.target.value);
    history.push(`/DisplayOneProduct/${localStorage.getItem('value')}`);
  }
  return (

    <Card style={{ width: '37rem' }}>
       {/* <Card.Img variant="top" src="image" alt='imgpost' /> */}
       <Card.Body>
       <Card.Title>Card Title : {props.title}</Card.Title>
      {/* <li key={props.id} value={props.id}> */}
          <Card.Text>text: {props.text}
                     <Card.Subtitle>createdAt : {props.createdAt}</Card.Subtitle>
                     <Card.Subtitle>PersonIds : {props.PersonId}</Card.Subtitle>
                     Data: {props.data}
          </Card.Text>
          {/* <img src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' alt={props.image.name} /> */}
          <Card.Text>updateAt : {props.updatedAt}</Card.Text>
          <Button onClick={handleClick} className={props.id} value={props.id}>
          Share</Button>
      {/* </li> */}
       </Card.Body>
    </Card>
  );
}
export default Articles;
