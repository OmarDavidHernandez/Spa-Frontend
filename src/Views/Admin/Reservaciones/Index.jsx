import {Link} from 'react-router-dom'
import {Container,Row,Col,Table,Card,CardBody,CardTitle,CardText,Button} from 'reactstrap'
import {useState,useEffect} from 'react'
import {confirmacion,enviarPeticion} from '../../../funciones'

const IndexReservaciones = () => {
  useEffect(()=>{
    obtenerReservaciones();
  },[]);
  const [reservaciones,setReservaciones] = useState([]);
  const obtenerReservaciones = async() =>{
    const res = await enviarPeticion('GET','','/reservaciones','',true);
    setReservaciones(res.data);
  }
  const eliminarReservacion = (id,nombre) =>{
    confirmacion(nombre,('/reservaciones/'+id),'/reservaciones','',true);
  }
  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <Card className='mt-5 bg-white mt-3 shadow text-center'>
              <CardBody>
                  <CardTitle className=''>
                    <Link to={'/crear-reservacion'} className='btn btn-primary'><i className='fa-solid fa-circle-plus'></i> Añadir</Link>
                  </CardTitle>
                  <CardText>
                    <Table responsive bordered striped>
                      <thead>
                        <tr><th>#</th><th>NOMBRE</th><th>TELEFONO</th><th>CORREO</th><th>SERVICIO</th><th>FECHA</th><th>HORA</th><th></th><th></th></tr>
                      </thead>
                      <tbody className='table-group-divider'>
                      { reservaciones.map( (row,i)=>(
                        <tr key={row.id}>
                          <td>{ (i+1) }</td>
                          <td>{ row.nombre}</td>
                          <td>{ row.telefono}</td>
                          <td>{ row.correo}</td>
                          <td>{ row.servicio}</td>
                          <td>{ row.cita}</td>
                          <td>{ row.hora}</td>
                          <td>
                            <Link to={'/editar-reservacion/'+row.id} className='btn btn-warning'><i className='fa-solid fa-edit'></i></Link>
                          </td>
                          <td><Button color='danger' onClick={()=> eliminarReservacion(row.id,row.nombre)}>
                            <i className='fa-solid fa-trash'></i>
                            </Button>
                          </td>
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

export default IndexReservaciones