import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function Create() {
    let history = useNavigate();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const postData = (event) => {
      event.preventDefault()
      axios.post(`https://64f3f3a8932537f4051a0ad0.mockapi.io/Festivals_API/festivals`, {
          title,
          date,
          name,
          duration
         })
            .then(()=> {
            history('/Read')
            })
    }

    const popover = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">Form Instructions</Popover.Header>
        <Popover.Body>
          Fill in the form and Click to submit.
        </Popover.Body>
      </Popover>
    );
    
          return (
            
              <div className='main-table'>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                  <Button variant="success">Click to see form instructions.</Button>
                </OverlayTrigger>

                <Form className='create-form'>
                  <Form.Group className="mb-3">
                    <Form.Label>Festival Title</Form.Label>
                    <Form.Control type="text" placeholder="festival title" onChange={(e) => setTitle(e.target.value)}/>
                  </Form.Group>
                                  
                  <Form.Group className="mb-3">
                    <Form.Label>Festival Date</Form.Label>
                    <Form.Control type="text" placeholder="festival date" onChange={(e) => setDate(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control type="text" placeholder="artist name" onChange={(e) => setName(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="text" placeholder="duration" onChange={(e) => setDuration(e.target.value)}/>
                  </Form.Group>
                  
                  <Button variant="success" onClick={postData} type="submit">
                    Submit
                  </Button>
                </Form>
               
              </div>
  );
}