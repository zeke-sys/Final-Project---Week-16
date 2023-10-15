import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import wheel from '../pictures/wheel.jpg';

function SessionCard() {
  const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://64f3f3a8932537f4051a0ad0.mockapi.io/Festivals_API/festivals`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

//using data map this time around as opposed to one of my last assignments
    return (
        <div className='card-container'>
          
        {APIData.map((data) => {
            return (
        <div>
              <Card className='cardBox'>
                <Card.Img className='cardImg' variant="top" src={wheel} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text className='card-text'>
                    {data.date}
                  </Card.Text>
                </Card.Body>
                
                  <ListGroup className="list-group-flush">
                  <ListGroup.Item>Name: {data.name}</ListGroup.Item>
                  <ListGroup.Item>Duration: {data.duration}</ListGroup.Item>
                  
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#inactive" disabled>Booking - tbd</Card.Link>
                  
                </Card.Body>
              </Card> 
            </div> 
            )               
          })}     
        </div>
            
    )
}
export default SessionCard;
    