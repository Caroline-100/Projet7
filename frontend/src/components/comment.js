import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from 'react-bootstrap';
import DisplayIdPersonidTextTitle from "./displayIDTitleTextIdperson";
import DisplayUpdateCreated from "./displayUpdateCreated";


function Comments({ id, title, createdAt, text, PersonId, updatedAt }) {


  return (
    <div className='article-top'>

      <DisplayIdPersonidTextTitle id={id} text={text} personId={PersonId} />
      <DisplayUpdateCreated createdAt={createdAt} updatedAt={updatedAt} />
      <CopyToClipboard text={window.location.href}>
        <Button>Link</Button>
      </CopyToClipboard>
    </div>
  )
}

export default Comments;