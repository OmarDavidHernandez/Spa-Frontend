import React from 'react'
import {Row,Col,Card,CardBody,CardTitle,CardText} from 'reactstrap'
import {Link} from 'react-router-dom'

const Admin = () => {
  return (
    <Row className='mt-5 bg-white'>
      <Col md='12' className='mt-5'>
        <p className='h4 text-center'>Bienvenido a la administración de Relaxin SPA</p>
      </Col>
      <Col md="4" lg='3' className='mt-5'>
        <Card className='border border-dark shadow'>
          <CardBody>
              <CardTitle className='h5'>Servicios</CardTitle>
              <CardText className='text-justificado'>
                Aquí podrás visualizar los servicios, modificarlos, eliminarlos y añadir nuevos.
              </CardText>
              <CardText className='text-center'>
                <Link to='/servicios' className='btn btn-primary'>Abrir</Link>
              </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col md="4" lg='3' className='mt-5'>
        <Card className='border border-dark shadow'>
          <CardBody>
              <CardTitle className='h5'>Testimonios</CardTitle>
              <CardText className='text-justificado'>
                Aquí podrás visualizar los testimonios, modificarlos, eliminarlos y añadir nuevos.
              </CardText>
              <CardText className='text-center'>
                <Link to='/testimonios' className='btn btn-primary'>Abrir</Link>
              </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col md="4" lg='3' className='mt-5'>
        <Card className='border border-dark shadow'>
          <CardBody>
              <CardTitle className='h5'>Blog</CardTitle>
              <CardText className='text-justificado'>
                Aquí podrás registrar nuevas entradas de blog, visualizar las notas actuales, modificarlas y eliminarlas.
              </CardText>
              <CardText className='text-center'>
                <Link to='/blog' className='btn btn-primary'>Abrir</Link>
              </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col md="4" lg='3' className='mt-5'>
        <Card className='border border-dark shadow'>
          <CardBody>
              <CardTitle className='h5'>Reservaciones</CardTitle>
              <CardText className='text-justificado'>
                Aquí podrás gestionar todas las reservaciones que llegue a través de la página, también podrás agendarlas directamente en este apartado.
              </CardText>
              <CardText className='text-center'>
                <Link to='/reservaciones' className='btn btn-primary'>Abrir</Link>
              </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col md="4" lg='3' className='mt-5'>
        <Card className='border border-dark shadow'>
          <CardBody>
              <CardTitle className='h5'>Usuarios</CardTitle>
              <CardText className='text-justificado'>
                Aquí podrás gestionar los usuarios que accedan al panel de administración.
              </CardText>
              <CardText className='text-center'>
                <Link to='/usuarios' className='btn btn-primary'>Abrir</Link>
              </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Admin