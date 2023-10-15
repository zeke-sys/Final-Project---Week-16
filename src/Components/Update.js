import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    let history = useNavigate();
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
   
    
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTitle(localStorage.getItem('Title'));
        setDate(localStorage.getItem('Date'));
        setName(localStorage.getItem('Name'));
        setDuration(localStorage.getItem('Duration'));
    }, []);

    //building update function
    const updateAPIData = (event) => {
      event.preventDefault()
        axios.put(`https://64f3f3a8932537f4051a0ad0.mockapi.io/Festivals_API/festivals/${id}`, {
            id,
            title,
            date,
            name,
            duration
        }).then(() => {
            history('/read')
        })
    }

    //currently having some issues with this. Will keep looking at it
    return (
        <div className='main-table'>
        <Form className='create-form'>
        <Form.Group className="mb-3">
          <Form.Label>Festival Title</Form.Label>
          <Form.Control type="text" placeholder="festival title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Festival Date</Form.Label>
          <Form.Control type="text" placeholder="festival date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Artist Name</Form.Label>
          <Form.Control type="text" placeholder="artist name" value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Duration</Form.Label>
          <Form.Control type="text" placeholder="duration" value={duration} onChange={(e) => setDuration(e.target.value)}/>
        </Form.Group>
        
        <Button variant="primary" type='submit' onClick={updateAPIData}>
          Update
        </Button>
      </Form>
     </div> 
    );
       
}