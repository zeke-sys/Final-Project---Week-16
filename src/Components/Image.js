import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ImageLayout() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="https://media.istockphoto.com/id/1320998575/photo/ferris-wheel-at-sunset-with-electric-lights-and-carnival-games-and-rides-in-image-purple-and.jpg?s=1024x1024&w=is&k=20&c=OvVgCVZ_9vKrTl7QWLxAj_DwCql71AB0PxrK0JS6BX0=" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://media.istockphoto.com/id/1457408719/photo/festival-group-photo-with-friends.jpg?s=1024x1024&w=is&k=20&c=6CNkqFTOY18DpahCY-86OlnXj9Q4yk5JTNeEFtRVRf0=" thumbnail/>
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://media.istockphoto.com/id/1457409025/photo/festival-moment.jpg?s=1024x1024&w=is&k=20&c=ReY6StlfBKZnUL6nraZVgfeoRAO_vgmyc2fMxPVc3Uk=" thumbnail/>
                </Col>
            </Row>
        </Container>
    );
}

export default ImageLayout;