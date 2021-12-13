import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Button } from 'react-bootstrap';

function Share(props) {


    return(
    <div>
      <CopyToClipboard text={window.location.href}>
        <Button>Link</Button>
      </CopyToClipboard>
    </div>
    )
}

export default Share