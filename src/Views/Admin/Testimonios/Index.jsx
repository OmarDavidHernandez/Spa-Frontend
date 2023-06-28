import React from 'react'
import {Link} from 'react-router-dom'
import { Parser } from 'html-to-react';
import {Container,Row,Col,Table,Card,CardBody,CardTitle,CardText,Button} from 'reactstrap'
import {useState,useEffect} from 'react'
import {confirmacion,enviarPeticion} from '../../../funciones'

const IndexTestimonios = () => {
  useEffect(()=>{
    obtenerTestimonios();
  },[]);
  const [testimonios,setTestimonios] = useState([]);
  const obtenerTestimonios = async() =>{
  const res = await enviarPeticion('GET','','/testimonios','',true);
  setTestimonios(res.data);
  }
  const eliminarTestimonio = (id,nombre) =>{
    confirmacion((' el testimonio de '+nombre),('/testimonios/'+id),'/testimonios',true);
  }
  const htmlParser = new Parser();
  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <Card className='mt-5 bg-white mt-3 shadow '>
              <CardBody>
                  <CardTitle className='text-center'>
                    <Link to={'/crear-testimonio'} className='btn btn-primary'><i className='fa-solid fa-circle-plus'></i> Añadir</Link>
                  </CardTitle>
                  <CardText>
                    <Table responsive bordered striped>
                      <thead>
                        <tr><th>#</th><th>NOMBRE</th><th>DESCRIPCION</th><th></th><th></th></tr>
                      </thead>
                      <tbody className='table-group-divider'>
                      { testimonios.map( (row,i)=>(
                        <tr key={row.id}>
                          <td>{ (i+1) }</td>
                          <td>{ row.cliente}</td>
                          <td>{htmlParser.parse(row.descripcion.substring(0, 100))} ...</td>
                          <td>
                            <Link to={'/editar-testimonio/'+row.id} className='btn btn-warning'><i className='fa-solid fa-edit'></i></Link>
                          </td>
                          <td><Button color='danger' onClick={()=> eliminarTestimonio(row.id,row.cliente)}>
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

export default IndexTestimonios