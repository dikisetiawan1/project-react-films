import {Container,Row,Col,Button} from "react-bootstrap"
const  Intro = () => {
    return(   

<div className='intro'>
<Container className='text-white d-flex justify-content-center align-item-center '>
  <Row>
    <Col>
    <div className='title'>BAYAR SEKALI </div>
    <div className='title'>NONTON SAMPAI BOSAN</div>
    <div className="introButton mt-4 text-center">
        <Button variant="dark">Lohat Semua List</Button>
    </div>
    
    </Col>
  </Row>
</Container>
</div>
    )


}


export default Intro