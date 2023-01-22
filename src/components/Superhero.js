import {Card, Col, Container, Image, Row} from "react-bootstrap"
import AntmanImage from "../assets/images/superhero/antman.jpg"
import AvanegerImage from "../assets/images/superhero/avenger.jpg"
import BatmanImage from "../assets/images/superhero/batman.jpg"
import RobinhoodImage from "../assets/images/superhero/robinhood.jpg"
import SpidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import SupermanImage from "../assets/images/superhero/superman.jpg"


const Superhero = () =>{


    return (

        <Container>
            <Row>
            <h1 className="pb-5 pt-3 text-white text-center" id="superhero">SUPERHERO MOVIES</h1>
            <Col md={4} className="movieWrapper mt-4">
                 <Card className=" bg-dark text-white ">
                    <Image 
                src={AntmanImage} 
                alt="Antman Movies"
                className="rounded"
                height="500px"
                />
                <Card.Title className="text-center pt-2 ">Antman</Card.Title>
                <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
            </Card.Text>
                <Card.Text className=" pb-2 ">Last updated 3 mins ago</Card.Text>
                </Card>
        </Col>
            <Col md={4} className="movieWrapper mt-4">
                 <Card className=" bg-dark text-white ">
                    <Image 
                src={AvanegerImage} 
                alt="Avenger Movies"
                className="rounded"
                height="500px"
                />
                <Card.Title className="text-center pt-2 ">Avenger</Card.Title>
                <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
            </Card.Text>
                <Card.Text className=" pb-2 ">Last updated 3 mins ago</Card.Text>
                </Card>
        </Col>
            <Col md={4} className="movieWrapper mt-4">
                 <Card className=" bg-dark text-white ">
                    <Image 
                src={BatmanImage} 
                alt="Batman Movies"
                className="rounded"
                height="500px"
                />
                <Card.Title className="text-center pt-2 ">Batman</Card.Title>
                <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
            </Card.Text>
                <Card.Text className=" pb-2 ">Last updated 3 mins ago</Card.Text>
                </Card>
        </Col>
            <Col md={4} className="movieWrapper mt-4">
                 <Card className=" bg-dark text-white ">
                    <Image 
                src={RobinhoodImage} 
                alt="Robinhood Movies"
                className="rounded"
                height="500px"
                />
                <Card.Title className="text-center pt-2 ">Robinhood</Card.Title>
                <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
            </Card.Text>
                <Card.Text className=" pb-2 ">Last updated 3 mins ago</Card.Text>
                </Card>
        </Col>
            <Col md={4} className="movieWrapper mt-4">
                 <Card className=" bg-dark text-white ">
                    <Image 
                src={SpidermanImage} 
                alt="Spiderman Movies"
                className="rounded"
                height="500px"
                />
                <Card.Title className="text-center pt-2 ">Spiderman</Card.Title>
                <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
            </Card.Text>
                <Card.Text className=" pb-2 ">Last updated 3 mins ago</Card.Text>
                </Card>
        </Col>
            <Col md={4} className="movieWrapper mt-4">
                 <Card className=" bg-dark text-white ">
                    <Image 
                src={SupermanImage} 
                alt="Superman Movies"
                className="rounded"
                height="500px"
                />
                <Card.Title className="text-center pt-2 ">Superman</Card.Title>
                <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
            </Card.Text>
                <Card.Text className=" pb-2 ">Last updated 3 mins ago</Card.Text>
                </Card>
        </Col>
            </Row>
        </Container>

    )
}

export default Superhero