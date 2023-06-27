import React from 'react'
import { Row,Col,Form,InputGroup,InputGroupText,Input,Button } from 'reactstrap'

const Formulario = (parametros) => {
  return (
    <Row className='mt-5 bg-white shadow'>
        <Col md='6'>
            <p className='h3 text-center mt-3'>Descubre la experiencia Relaxin</p>
            <Row>
                <Col xs='2' sm='1'>
                    <p className='mt-5 pt-3 text-end'><i className="fa-solid fa-location-dot"></i></p>
                </Col>
                <Col xs='10' sm='11'>
                <p className='mt-5 ps-md-5 mb-0'>Av. Bolívar con calle 8. C.C. Laila Local 3</p>
                <p className='ps-md-5 mb-0'>Sector Centro</p>
                <p className='ps-md-5'>Valera Edo. Trujillo</p>
                </Col>
            </Row>
            <Row>
                <Col xs='2' sm='1'>
                    <p className='mt-3 pt-3 text-end'><i className="fa-solid fa-clock"></i></p>
                </Col>
                <Col xs='10' sm='11'>
                <p className='mt-3 ps-md-5 mb-0'>Horarios</p>
                <p className='ps-md-5 mb-0'>Lunes a sábado: 8:00 am - 8:00 pm</p>
                <p className='ps-md-5'>Domingo: 8:30 am - 2:00 pm</p>
                </Col>
            </Row>
            <Row>
                <Col xs='2' sm='1'>
                    <p className='mt-2 text-end'><i className="fa-solid fa-phone"></i></p>
                </Col>
                <Col xs='10' sm='11'>
                <p className='mt-2 ps-md-5 mb-0'>0414-7175147</p>
                </Col>
            </Row>
            <Row>
                <Col xs='2' sm='1'>
                    <p className='mt-2 text-end'><i className="fa-solid fa-envelope"></i></p>
                </Col>
                <Col xs='10' sm='11'>
                <p className='mt-2 ps-md-5 mb-0'>info@relaxin.com</p>
                </Col>
            </Row>
        </Col>
        <Col md='6 shadow'>
            <Form>
                <p className='h3 text-center  pt-sm-5'>¡Reserve Ahora!</p>
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
                    <InputGroupText><i className='fa-solid fa-spa'></i></InputGroupText>
                    <Input type='select'>
                    { parametros.servicios.map( (row,i)=>(
                    <option value={row.id} key={row.id}>{row.nombre}</option>
                    ))}
                        
                    </Input>
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroupText><i className='fa-solid fa-calendar'></i></InputGroupText>
                    <Input type='date' />
                </InputGroup>
                <p className='text-center'><Button color='dark'>Reservar</Button></p>
            </Form>
        </Col>
    </Row>
  )
}

export default Formulario