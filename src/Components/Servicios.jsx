import {Row,Col,Card,CardBody,CardTitle,CardText} from 'reactstrap'

const Servicios = (parametros) => {
    
  return (
    <Row className='mt-3'>
        { parametros.servicios.map( (row,i)=>(
        <Col md="6" className='mt-3' key={row.id}>
        <Card className='bg-card'>
            <CardBody>
                <CardTitle className='h5 text-title-card'>{row.nombre}</CardTitle>
                <CardText>
                {row.descripcion}
                <img src={parametros.url+row.imagen} height='100px'></img>
                </CardText>
                
            </CardBody>
        </Card>
        </Col>
      ))}

    </Row>
  )
}

export default Servicios