// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfilePhoto from '../../Assets/beauty.jpg'

function BasicExample() {
    return (
        <Card >
        <Card.Img variant="top" src={ProfilePhoto} />
        <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
            John is a passionate software developer with a strong foundation in React js. He is skilled in various programming languages and enjoy collaborating with others. Seyi is committed to delivering high-quality, clean, and maintainable code. They are excited about the future of software development and eager to make a positive impact.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card>
    );
}

export default BasicExample;