import React from 'react';
import Container from 'react-bootstrap/Container';
import CarouselView from './Carousel';
//import ImageLayout from './Image'; //decided to forgo this as I got the carousel to work
import { Link } from 'react-router-dom';

//landing page
function Home() {
  return (

   <Container className='main'>
     
        <p>Our website seeks to make festival booking fun and user-friendly. With limited advertisements, a user can quickly visit our page and book the festival of your dream. We partner with the most popular venues around the world, artists, and agents alike, to make users experience one to remember.</p>
                      
        <CarouselView />
        <br></br>

        <Link to="/Sessions">
              <button className='btn-link'>Click to see complete list of Festivals</button>
        </Link>
         
    </Container>
              
  );
}

export default Home;