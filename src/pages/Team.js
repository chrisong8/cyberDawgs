// our team page

import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// TODO: arrange into neater formation and add links
// TODO: add info and style cards
function Team() {
    return(
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Chris Ong</Card.Title>
            <Card.Text>
            Insert bio here
            </Card.Text>
            <Button variant="primary">Read More</Button>
        </Card.Body>
        </Card>,

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Million Werede</Card.Title>
            <Card.Text>
            Insert bio here
            </Card.Text>
            <Button variant="primary">Read More</Button>
        </Card.Body>
        </Card>,

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Matthew Balgan</Card.Title>
            <Card.Text>
            Insert bio here
            </Card.Text>
            <Button variant="primary">Read More</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Connor Fink</Card.Title>
            <Card.Text>
            Insert bio here
            </Card.Text>
            <Button variant="primary">Read More</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Daniel Cavazos</Card.Title>
            <Card.Text>
            Insert bio here
            </Card.Text>
            <Button variant="primary">Read More</Button>
        </Card.Body>
        </Card>
        </div>
    );
}

export default Team;