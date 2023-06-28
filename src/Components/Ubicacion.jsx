import React from 'react'
import { Row,Col } from 'reactstrap'

import FormReservacion from './FormReservacion'
const Ubicacion = (parametros) => {
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
        <Col md='6 shadow' id='reservacion'>
            <FormReservacion id={null} servicios={parametros.servicios} titulo='Reserve Ahora!' redir='' />
        </Col>
        <Col >
        </Col>
    </Row>
  )
}

export default Ubicacion