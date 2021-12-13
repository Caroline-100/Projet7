import React from "react";
// import { Card } from 'react-bootstrap';

function DisplayOneArticle(
    {
        id, title, text, createdAt, PersonId, data, updatedAt
    }
) {
    return (
        // key={id}
        <li value={id}>
            {/* <Card style={{ width: '37rem' }}> */}
            Card title :  {title}
            Card Subtitle : {createdAt}
            {/* <Card.Img variant="top" src="image" alt='imgpost' />
                <Card.Body>
                    <Card.Title>Card Title : {title}</Card.Title>
                    <Card.Subtitle>createdAt : {createdAt}</Card.Subtitle>
                    <Card.Subtitle>PersonIds : {PersonId}</Card.Subtitle>
                    <Card.Text>text: {text}
                    </Card.Text>
                    <Card.Text>
                        Data: {data}
                    </Card.Text>
                    {/* <img src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' alt={image.name} />
                     */}
            {/* <Card.Text>updateAt : {updatedAt}</Card.Text>
                // </Card.Body>*/}
            {/* </Card> */}
        </li>
    )
}
export default DisplayOneArticle;