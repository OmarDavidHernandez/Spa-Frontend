import {Row,Col,Card,CardBody,CardTitle,CardText,CardFooter} from 'reactstrap'

const Servicios = (parametros) => {
    
  return (
    <Row className='mt-3' id='servicios'>
      <Col md="12" >
      <p className='h3 text-center'>Conoce nuestros servicios</p>
      </Col>
        { parametros.servicios.map( (row,i)=>(
        <Col md="6" className='mt-3' key={row.id}>
        <Card className='bg-card'>
            <CardBody>
                <CardTitle className='h5 text-title-card'>{row.nombre}</CardTitle>
                <Row>
                  <Col xs='8' md='7' lg='9'></Col>
                  <Col xs='4' md='5' lg='3'></Col>
                </Row>
                <CardText className='text-justificado'>
                  {row.descripcion}
                </CardText>
                <CardText className='text-center'>
                  <img src={parametros.url+row.imagen} height='100px'></img>
                </CardText>
                <CardText className='text-center'>
                  A solo <b>${row.precio}</b>
                </CardText>
            </CardBody>
        </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Servicios