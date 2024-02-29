import './card3.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function BasicExample2() {
    return (
        <Card className='card3' >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title className='cardT'>Certificates</Card.Title>
            <Card.Text className='text3'>
            <a href="http://GOMYCODE.COM" >GOMYCODE</a>
            <a href="http://COURSERA.COM" >COURSERA</a>
            <a href="http://UDEMY.COM">UDEMY</a>
            </Card.Text>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Full Stack Programming</ListGroup.Item>
            <ListGroup.Item>Data Science</ListGroup.Item>
            <ListGroup.Item>UI/UX</ListGroup.Item>
            </ListGroup>
        </Card.Body>
        </Card>
    );
}

export default BasicExample2;