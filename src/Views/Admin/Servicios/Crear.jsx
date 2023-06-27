import React from 'react'
import {Container,Row,Col,Card,CardBody,CardTitle,CardText,Button,Form,InputGroup,InputGroupText,Input} from 'reactstrap'

const CrearServicios = () => {
  return (
    <Container>
      <Row>
        <Col>
        <Card className='bg-white mt-3 shadow text-center'>
              <CardBody>
                  <CardTitle className=''>
                  <p className='h3 text-center'>Crear</p>
                  </CardTitle>
                  <CardText>
                  <Form>
                    <InputGroup className='mt-5 mb-3'>
                        <InputGroupText><i className='fa-solid fa-user'></i></InputGroupText>
                        <Input placeholder="Nombre" />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroupText><i className='fa-solid fa-phone'></i></InputGroupText>
                        <Input placeholder="Teléfono" />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroupText><i className='fa-solid fa-at'></i></InputGroupText>
                        <Input placeholder="Correo" />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroupText><i className='fa-solid fa-calendar'></i></InputGroupText>
                        <Input type='date' />
                    </InputGroup>
                    <p className='text-center'><Button color='dark'>Reservar</Button></p>
                </Form>
                  </CardText>
                  
              </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CrearServicios