import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Logo from '../pictures/Logo.png';
import { Container } from 'react-bootstrap';
/*import goers from '../pictures/goers.jpg';
import concert from '../pictures/concert.jpg';*/

export default class CarouselView extends React.Component{
render() {
    return(
      <Container>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={1500}>
            <img
              //className="d-block w-100"
              src={Logo}
              alt="Logo slide"
            />
            <Carousel.Caption>
              <h1>Music Festivals</h1>
            
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1411617382/photo/rave-party.jpg?s=1024x1024&w=is&k=20&c=x-XevXYEkRHLaFZB70qYIOoo7QyEfK_lwtInUCd1xYI="
              alt="Concert slide"
            />
            <Carousel.Caption>
              <h1>Festival</h1>
              <h3>Techno Music</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1457408719/photo/festival-group-photo-with-friends.jpg?s=1024x1024&w=is&k=20&c=6CNkqFTOY18DpahCY-86OlnXj9Q4yk5JTNeEFtRVRf0="
              alt="Goers slide"
            />
            <Carousel.Caption>
              <h1>Festival</h1>
              <h3>Country Music</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1457409025/photo/festival-moment.jpg?s=1024x1024&w=is&k=20&c=ReY6StlfBKZnUL6nraZVgfeoRAO_vgmyc2fMxPVc3Uk="
              alt="Participant slide"
            />
            <Carousel.Caption>
              <h1>Festival</h1>
              <h3>Pop Music</h3>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1447355262/photo/crowd-of-people-entering-music-festival.jpg?s=1024x1024&w=is&k=20&c=h1G51Sq_MmO_SLlH-mq6jYhUARY_9l0P13Ke9wyHqho="
              alt="Venue slide"
            />
            <Carousel.Caption>
              <h1>Festival</h1>
              <h3>Christian Music</h3>
            </Carousel.Caption>
          </Carousel.Item>
        
      </Carousel>
 
      </Container>
    );
 }
}