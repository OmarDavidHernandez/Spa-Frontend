import {Link} from 'react-router-dom'
import {Container,Row,Col,Table,Card,CardBody,CardTitle,CardText,Button} from 'reactstrap'
import {useState,useEffect} from 'react'
import {enviarPeticion,obtenerUrl} from '../../../funciones'

const IndexServicios = () => {
  useEffect(()=>{
    obtenerServicios();
  },[]);
  const [servicios,setServicios] = useState([]);
  const obtenerServicios = async() =>{
    const res = await enviarPeticion('GET','','/servicios','');
    setServicios(res.data);
  }
  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <Card className='bg-white mt-3 shadow text-center'>
              <CardBody>
                  <CardTitle className=''>
                    <Link to={'/crear-servicio'} className='btn btn-primary'><i className='fa-solid fa-circle-plus'></i> Añadir</Link>
                  </CardTitle>
                  <CardText>
                    <Table responsive bordered striped>
                      <thead>
                        <tr><th>#</th><th>NOMBRE</th><th>DESCRIPCION</th><th>PRECIO</th><th>IMAGEN</th><th></th><th></th></tr>
                      </thead>
                      <tbody className='table-group-divider'>
                      { servicios.map( (row,i)=>(
                        <tr key={row.id}>
                          <td>{ (i+1) }</td>
                          <td>{ row.nombre}</td>
                          <td>{ row.descripcion}</td>
                          <td>{ row.precio}</td>
                          <td><img src={obtenerUrl()+row.imagen} height='60px' /></td>
                          <td>
                            <Link to={'/editar-servicio/'+row.id} className='btn btn-warning'><i className='fa-solid fa-edit'></i></Link>
                          </td>
                          <td><Button color='danger'><i className='fa-solid fa-trash'></i></Button></td>
                        </tr>
                      ))}
                      </tbody>
                    </Table>
                  </CardText>
                  
              </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default IndexServicios