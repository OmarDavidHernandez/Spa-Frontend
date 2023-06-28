import React,{useEffect,useState,useRef} from 'react'
import {Container,Row,Col,Card,CardBody,CardTitle,CardText,Button,Form,InputGroup,InputGroupText,Input} from 'reactstrap'
import { enviarPeticion,obtenerUrl } from '../funciones'

const FormServicios = (parametros) => {
    const [nombre,setNombre] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [precio,setPrecio] = useState('');
    const [imagen,setImagen] = useState('');
    const [srcImg,setSrcImg] = useState('/img/default.png');
    const [requerida,setRequerida] = useState(true);
    const NombreInput = useRef();
    let metodo = 'POST';
    let url = '/servicios';
    
    useEffect( () =>{
        NombreInput.current.focus();
        obtenerServicio();
    },[]);
    const obtenerServicio = async() =>{
        if(parametros.id !== null){
            const res = await enviarPeticion('GET','',(url+'/'+parametros.id),'',true);
            setNombre(res.data[0].nombre);
            setDescripcion(res.data[0].descripcion);
            setPrecio(res.data[0].precio);
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
            url = '/servicios/'+parametros.id;
        }
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        if(imagen != ''){
            formData.append('imagen', imagen);
        }
        await enviarPeticion(metodo,formData,url,'/servicios',true);
        
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
                        <Col md='9'>
                        <Form onSubmit={guardar}>
                            <InputGroup className='mt-5 mb-3'>
                                <InputGroupText><i className='fa-solid fa-spa'></i></InputGroupText>
                                <Input value={nombre} placeholder="Nombre" ref={NombreInput} onChange={(e) => setNombre(e.target.value)} required />
                            </InputGroup>
                            <InputGroup className='mb-3'>
                                <InputGroupText><i className='fa-solid fa-dollar-sign'></i></InputGroupText>
                                <Input value={precio} type='number' min='0' step='0.1' placeholder="Precio" onChange={(e) => setPrecio(e.target.value)} required />
                            </InputGroup>
                            <InputGroup className='mb-3'>
                                <InputGroupText><i className='fa-solid fa-message'></i></InputGroupText>
                                <Input value={descripcion} placeholder="Descripción" onChange={(e) => setDescripcion(e.target.value)} required />
                            </InputGroup>
                            <InputGroup className='mb-3'>
                                <InputGroupText><i className='fa-solid fa-image'></i></InputGroupText>
                                <Input type='file' accept="image/png,image/jpeg" onChange={(e) => ver(e.target)} required={requerida} />
                            </InputGroup>
                            <p className='text-center'><Button color='dark'><i className='fa-solid fa-save'></i> Guardar</Button></p>
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

export default FormServicios