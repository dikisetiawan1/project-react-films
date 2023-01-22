import {Card, Col, Container, Image, Row} from "react-bootstrap"
import DuneImage from "../assets/images/trending/dune.jpg"
import JokerImage from "../assets/images/trending/joker.jpg"
import EverythingImage from "../assets/images/trending/everything.jpg"
import InfiniteImage from "../assets/images/trending/infinite.jpg"
import MorbiusImage from "../assets/images/trending/morbius.jpg"
import LightyearImage from "../assets/images/trending/lightyear.jpg"

const Trending = () => {


    return(
      <div>
   <Container>
    <Row>
      <h1 className="pb-5 pt-3 text-white text-center" id="trending">TRENDING MOVIES</h1>
      <Col md={4} className="movieWrapper mt-4">
    <Card className=" bg-dark text-white ">
      <Image 
      src={DuneImage} 
      alt="Dune Movies"
      className="rounded"
      height="500px"
      />
        <Card.Title className="text-center pt-2 ">Dune</Card.Title>
        <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
        </Card.Text>
        <Card.Text className=" pb-2 ">Last updated 3 mins ago</Card.Text>
    </Card>
      </Col>

      <Col md={4} className="movieWrapper mt-4">
    <Card className=" bg-dark text-white">
      <Image 
      src={JokerImage} 
      alt="Joker Movies"
      className="rounded"
      height="500px"
      />
        <Card.Title className="text-center pt-2">Joker</Card.Title>
        <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
        </Card.Text>
        <Card.Text className="pb-2  ">Last updated 3 mins ago</Card.Text>
    </Card>
    
      </Col>

      <Col md={4} className="movieWrapper mt-4">
    <Card className=" bg-dark text-white ">
      <Image 
      src={EverythingImage} 
      alt="everything Movies"
      className="rounded"
      height="500px"
      />
        <Card.Title className="text-center pt-2">Everything</Card.Title>
        <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
        </Card.Text>
        <Card.Text className="pb-2  ">Last updated 3 mins ago</Card.Text>
    </Card>
      </Col>
      <Col md={4} className="movieWrapper mt-4">
    <Card className=" bg-dark text-white ">
      <Image 
      src={InfiniteImage} 
      alt="everything Movies"
      className="rounded"
      height="500px"
      />
        <Card.Title className="text-center pt-2">Infinite</Card.Title>
        <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
        </Card.Text>
        <Card.Text className="pb-2  ">Last updated 3 mins ago</Card.Text>
    </Card>
      </Col>
      <Col md={4} className="movieWrapper mt-4">
    <Card className=" bg-dark text-white ">
      <Image 
      src={MorbiusImage} 
      alt="everything Movies"
      className="rounded"
      height="500px"
      />
        <Card.Title className="text-center pt-2">Morbius</Card.Title>
        <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
        </Card.Text>
        <Card.Text className="pb-2  ">Last updated 3 mins ago</Card.Text>
    </Card>
      </Col>
      <Col md={4} className="movieWrapper mt-4 mb-4">
    <Card className=" bg-dark text-white ">
      <Image 
      src={LightyearImage} 
      alt="everything Movies"
      className="rounded"
      height="500px"
      />
        <Card.Title className="text-center pt-2">Lightyear</Card.Title>
        <Card.Text className="text-left p-2">
          This is a wider card with supporting text below as a natural lead-in.
        </Card.Text>
        <Card.Text className="pb-2  ">Last updated 3 mins ago</Card.Text>
    </Card>
      </Col>

     
    </Row>
   </Container>
   </div>
    )
}

export default Trending