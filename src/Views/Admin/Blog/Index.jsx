import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Table,Card,CardBody,CardTitle,CardText,Button} from 'reactstrap'
import {useState,useEffect} from 'react'
import {confirmacion,enviarPeticion,obtenerUrl} from '../../../funciones'

const IndexBlog = () => {
  useEffect(()=>{
    obtenerBlog();
  },[]);
  const [blog,setBlog] = useState([]);
  const obtenerBlog = async() =>{
    const res = await enviarPeticion('GET','','/blog','',true);
    setBlog(res.data);
  }
  const eliminarBlog = (id,nombre) =>{
    confirmacion(nombre,('/blog/'+id),'/blog','',true);
  }
  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <Card className='mt-5 bg-white mt-3 shadow text-center'>
              <CardBody>
                  <CardTitle className=''>
                    <Link to={'/crear-blog'} className='btn btn-primary'><i className='fa-solid fa-circle-plus'></i> Añadir</Link>
                  </CardTitle>
                  <CardText>
                    <Table responsive bordered striped>
                      <thead>
                        <tr><th>#</th><th>TITULO</th><th>DESCRIPCION</th><th>IMAGEN</th><th></th><th></th></tr>
                      </thead>
                      <tbody className='table-group-divider'>
                      { blog.map( (row,i)=>(
                        <tr key={row.id}>
                          <td>{ (i+1) }</td>
                          <td>{ row.titulo}</td>
                          <td>{ row.descripcion.substring(0, 100)} ...</td>
                          <td><img src={obtenerUrl()+row.imagen} height='60px' /></td>
                          <td>
                            <Link to={'/editar-blog/'+row.id} className='btn btn-warning'><i className='fa-solid fa-edit'></i></Link>
                          </td>
                          <td><Button color='danger' onClick={()=> eliminarBlog(row.id,row.titulo)}>
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

export default IndexBlog