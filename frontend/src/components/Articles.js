import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

import DisplayUpdateCreated from './displayUpdateCreated'
import DisplayIdPersonidTextTitle from "./displayIDTitleTextIdperson";

function Articles({ id, title, createdAt, PersonId, updatedAt, data, text, }) {
  let history = useHistory();

  function handleClick(event) {
    console.log(typeof event.target.value);
    localStorage.setItem('value', event.target.value);
    history.push(`/DisplayOneProduct/${localStorage.getItem('value')}`);
  }

  return (
    <li>
      <Card style={{ width: '37rem' }}>
        <Card.Body>
          <DisplayIdPersonidTextTitle id={id} text={text} personId={PersonId} title={title} />
          <DisplayUpdateCreated updatedAt={updatedAt} createdAt={createdAt} />
          Data: {data}
          <Button onClick={handleClick} className={id} value={id}>
            Share</Button>
        </Card.Body>
      </Card>
    </li>
  );
}
export default Articles;
