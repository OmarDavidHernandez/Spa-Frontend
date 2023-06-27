import React from 'react'
import Carrusel from '../../Components/Carrusel'
import Servicios from '../../Components/Servicios'
import Formulario from '../../Components/Formulario'
import {Container,Row,Col} from 'reactstrap'
import { useState,useEffect} from 'react'
import { enviarPeticion,obtenerUrl } from '../../funciones'
const Pagina = () => {
  useEffect(()=>{
    obtenerServicios();
  },[]);  
  const [servicios,setServicios] = useState([]);
  const obtenerServicios = async() =>{
    const res = await enviarPeticion('GET','','/servicios','');
    setServicios(res.data);
  }
  return (
    <>
    <Container fluid>
      <Row>
        <Col lg={{ offset: 2,size: 8}} md={{ offset: 1,size: 10}}>
          <Carrusel />
        </Col>
      </Row>
      <Row className='bg-brown'>
        <Col lg={{ offset: 2,size: 8}} md={{ offset: 1,size: 10}}>
        <Servicios servicios={servicios} url={obtenerUrl()} />
        </Col>
      </Row>
    </Container>
    <Container>
      
    </Container>
    <Container fluid>
    <Row className='mt-3'>
      <Col md="6" lg="4" className='d-none d-lg-block'>
        <img src='img/servicios1.jpg' className='img-fluid'></img>
      </Col>
      <Col md="6" lg="4">
        <img src='img/servicios2.jpg' className='img-fluid'></img>
      </Col>
      <Col md="6" lg="4">
        <img src='img/servicios3.jpg' className='img-fluid'></img>
      </Col>
    </Row>
    </Container>
    <Container>
      <Formulario  servicios={servicios} />
    </Container>
    </>
  )
}

export default Pagina
