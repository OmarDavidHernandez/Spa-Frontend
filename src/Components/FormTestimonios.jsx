import React,{useEffect,useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Container,Row,Col,Card,CardBody,CardTitle,CardText,Button,Form,InputGroup,InputGroupText,Input} from 'reactstrap'
import { enviarPeticion } from '../funciones'

const FormTestimonios = (parametros) => {
    const [cliente,setCliente] = useState('');
    const [descripcion,setDescripcion] = useState('');
    let metodo = 'POST';
    let url = '/testimonios';
    
    useEffect( () =>{
        obtenerTestimonio();
    },[]);
    const obtenerTestimonio = async() =>{
        if(parametros.id !== null){
            const res = await enviarPeticion('GET','',(url+'/'+parametros.id),'',true);
            setCliente(res.data[0].cliente);
            setDescripcion(res.data[0].descripcion);
        }
    }
    const guardar = async(e) =>{
        e.preventDefault();
        if(parametros.id !== null){
            metodo= 'PUT';
            url = '/testimonios/'+parametros.id;
        }
        await enviarPeticion(metodo,{cliente:cliente,descripcion:descripcion},url,'/testimonios',true);
        
    }
  return (
    <Container>
      <Row>
        <Col>
        <Card className='mt-5 bg-white mt-3 shadow text-center'>
              <CardBody>
                  <CardTitle className=''>
                  <p className='h3 text-center'>{ parametros.titulo}</p>
                  </CardTitle>
                  <CardText>
                    <Row>
                        <Col md='12'>
                        <Form onSubmit={guardar}>
                            <InputGroup className='mt-5 mb-3'>
                                <InputGroupText><i className='fa-solid fa-user'></i></InputGroupText>
                                <Input value={cliente} placeholder="Cliente"  onChange={(e) => setCliente(e.target.value)} required />
                            </InputGroup>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={descripcion}
                                onChange={ ( event, editor ) => {
                                    setDescripcion(editor.getData());
                                } }
                            />
                            <p className='text-center mt-3'><Button color='dark'><i className='fa-solid fa-save'></i> Guardar</Button></p>
                        </Form>
                        </Col>
                    </Row>
                  </CardText>
                  
              </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default FormTestimonios