import React from "react";

function DisplayIdPersonidTextTitle({ id, title, personId, text, }) {

    return (
        <div>
            <div> id: {id} </div>
            <div> titles  : {title}</div>
            <div> Person id: {personId} </div>
            <div> text: {text}</div>
        </div>
    )
}
// id, title, createdAt, PersonId, u pdatedAt,data, text,
export default DisplayIdPersonidTextTitle;