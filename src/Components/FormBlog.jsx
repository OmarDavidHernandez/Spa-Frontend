import React,{useEffect,useState} from 'react'
import {Container,Row,Col,Card,CardBody,CardTitle,CardText,Button,Form,InputGroup,InputGroupText,Input} from 'reactstrap'
import { enviarPeticion,obtenerUrl } from '../funciones'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const FormBlog = (parametros) => {
    const [titulo,setTitulo] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [imagen,setImagen] = useState('');
    const [srcImg,setSrcImg] = useState('/img/default.png');
    const [requerida,setRequerida] = useState(true);
    let metodo = 'POST';
    let url = '/blog';
    
    useEffect( () =>{
        obtenerBlog();
    },[]);
    const obtenerBlog = async() =>{
        if(parametros.id !== null){
            const res = await enviarPeticion('GET','',(url+'/'+parametros.id),'',true);
            setTitulo(res.data[0].titulo);
            setDescripcion(res.data[0].descripcion);
            setSrcImg(obtenerUrl()+res.data[0].imagen);
            setRequerida(false);
        }
    }
    const ver = (e) =>{
        setImagen(e.files[0]);
        setSrcImg(URL.createObjectURL(e.files[0]));
    }
    const guardar = async(e) =>{
        e.preventDefault();
        if(parametros.id !== null){
            metodo= 'PUT';
            url = '/blog/'+parametros.id;
        }
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        if(imagen != ''){
            formData.append('imagen', imagen);
        }
        await enviarPeticion(metodo,formData,url,'/blog',true);
        
    }
  return (
    <Container>
      <Row>
        <Col>
        <Card className='bg-white mt-3 shadow text-center'>
              <CardBody>
                  <CardTitle className=''>
                  <p className='h3 text-center'>{ parametros.titulo}</p>
                  </CardTitle>
                  <CardText>
                    <Row>
                        <Col md='9'>
                        <Form onSubmit={guardar}>
                            <InputGroup className='mt-5 mb-3'>
                                <InputGroupText><i className='fa-solid fa-align-justify'></i></InputGroupText>
                                <Input value={titulo} placeholder="Título" onChange={(e) => setTitulo(e.target.value)} required />
                            </InputGroup>
                            <InputGroup className='mb-3'>
                                <InputGroupText><i className='fa-solid fa-image'></i></InputGroupText>
                                <Input type='file' accept="image/png,image/jpeg" onChange={(e) => ver(e.target)} required={requerida} />
                            </InputGroup>
                            <p className='text-start'><i className="fa-solid fa-message"></i> Redacta tu entrada de blog:</p>
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
                        <Col md='3'>
                            <img className='shadow mt-md-5 img-fluid' src={srcImg} height='200px'></img>
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

export default FormBlog