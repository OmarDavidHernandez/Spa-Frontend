import React from 'react'
import { useLocation } from 'react-router-dom'
import {Container,Row,Col} from 'reactstrap'
const Pie = () => {
  const ruta = useLocation().pathname;
   let clase = ( ruta !='/')  ? 'fixed-bottom': 'mt-5';
  return (
    <Container fluid className={clase}>
      <Row className='mt-5 bg-green'>
        <Col xs='4' md="6" lg="4" className=''>
          <footer className='mt-3 mb-3'>
            <img src='img/logo.png' height='150px'></img>
          </footer>
        </Col>
        <Col xs='8' md="6" lg="4" className='mt-5'>
          <p className='h5 mt-3 text-center'><b>Todos los derechos reservados por Relaxin SPA</b></p>
        </Col>
      </Row>
    </Container>
  )
}

export default Pie