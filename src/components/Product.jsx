import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Product = () => {
    const [items, setItems] = useState([])
    let [visible, setVisible] = useState(6)
    useEffect(()=>{
        async function allproduct(){
        let data = await axios.get("https://project-back-td11.onrender.com/api/v1/GetAllProduct")
        setItems(data.data.data)
        }
        allproduct()
    },[])
  return (
    <Container className='mt-5'>
        <Row>
            {items.slice(0,visible).map((item, i)=>(
            <Col key={i} md="4">
                <Card className='mt-3 shadow-sm' style={{ width: 'auto' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.shortDes}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            ))}
            <div className='my-3 m-auto text-center shadow py-4 rounded'>
                <Button className='mt-4' onClick={()=>setVisible((prev) => prev + 3)}>Show More</Button>
                <Button className='mt-4 ms-3 bg-dark' onClick={()=>setVisible(6)}>Show Less</Button>
            </div>
        </Row>
    </Container>
  )
}

export default Product