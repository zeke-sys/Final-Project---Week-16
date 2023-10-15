import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


//function takes the mockdata and show it in the table
function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://64f3f3a8932537f4051a0ad0.mockapi.io/Festivals_API/festivals`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, title, date, name, duration } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Title', title);
        localStorage.setItem('Date', date);
        localStorage.setItem('Name', name);
        localStorage.setItem('Duration', duration)
    }

    const getData = () => {
        axios.get(`https://64f3f3a8932537f4051a0ad0.mockapi.io/Festivals_API/festivals`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://64f3f3a8932537f4051a0ad0.mockapi.io/Festivals_API/festivals/${id}`)
        .then(() => {
            getData();
        })
    }

    //rendering/returning everything that is added in the form in a table
    return (
        <div className='main-table'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Lineup</th>
                        <th>Duration</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data) => {
                        
                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.date}</td>
                                <td>{data.name}</td>
                                <td>{data.duration}</td>
                                  
                                <td> <Link to='/Update'>
                                    <Button size='sm' onClick={() => setData(data)}>Update</Button>
                                    </Link>
                                </td>
                                
                                <td>
                                    <Button size='sm' variant='dark' onClick={() => onDelete(data.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
            
    )
}
export default Read;