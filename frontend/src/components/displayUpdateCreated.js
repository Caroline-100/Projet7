import React from "react";

function DisplayUpdateCreated({ createdAt, updatedAt }) {

    return (
        <div>
            <div> date of creation : {createdAt} </div>
            <div> update: {updatedAt}</div>
        </div>
    )
}
// id, title, createdAt, PersonId, u pdatedAt,data, text,
export default DisplayUpdateCreated;