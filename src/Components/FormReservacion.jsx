import React,{useEffect,useState} from 'react'
import Clima from './Clima'
import {Container,Row,Col,Card,CardBody,CardTitle,CardText,Button,Form,InputGroup,InputGroupText,Input} from 'reactstrap'
import { enviarPeticion } from '../funciones'

const FormReservacion = (parametros) => {
    const [nombre,setNombre] = useState('');
    const [telefono,setTelefono] = useState('');
    const [correo,setCorreo] = useState('');
    const [servicio,setServicio] = useState('');
    const [fecha,setFecha] = useState('');
    const [hora,setHora] = useState('');
    let metodo = 'POST';
    let url = '/reservaciones';
    let protegida = false;
    useEffect( () =>{
        obtenerReservacion();
    },[]);
    const obtenerReservacion = async() =>{
        if(parametros.id !== null){
            const res = await enviarPeticion('GET','',(url+'/'+parametros.id),'',true);
            setNombre(res.data[0].nombre);
            setCorreo(res.data[0].correo);
            setTelefono(res.data[0].telefono);
            setServicio(res.data[0].servicio_id);
            setFecha(res.data[0].fecha2);
            setHora(res.data[0].hora);
        }
    }
    const guardar = async(e) =>{
        e.preventDefault();
        if(parametros.id !== null){
            metodo= 'PUT';
            url = '/reservaciones/'+parametros.id;
            protegida = true;
        }
        await enviarPeticion(metodo,{nombre:nombre,telefono:telefono,correo:correo,servicio:servicio,fecha:fecha,hora:hora},url,parametros.redir,protegida);
        setNombre('');
        setCorreo('');
        setTelefono('');
        setServicio('');
        setFecha('');
        setHora('');
    }
    
    return (
        <Form onSubmit={guardar}>
                <p className='h3 text-center  pt-sm-5'>{parametros.titulo}</p>
                <Clima />
                <InputGroup className='mt-3 mb-3'>
                    <InputGroupText><i className='fa-solid fa-user'></i></InputGroupText>
                    <Input value={nombre} onChange={(e) => setNombre(e.target.value)}  placeholder="Nombre" required />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroupText><i className='fa-solid fa-phone'></i></InputGroupText>
                    <Input value={telefono} onChange={(e) => setTelefono(e.target.value)}  placeholder="Teléfono" required />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroupText><i className='fa-solid fa-at'></i></InputGroupText>
                    <Input type='email' value={correo} onChange={(e) => setCorreo(e.target.value)}  placeholder="Correo" required />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroupText><i className='fa-solid fa-spa'></i></InputGroupText>
                    <Input value={servicio} onChange={(e) => setServicio(e.target.value)}  type='select' required>
                    <option value=''>Servicio</option>
                    { parametros.servicios.map( (row,i)=>(
                    <option value={row.id} key={row.id}>{row.nombre}</option>
                    ))}
                        
                    </Input>
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroupText><i className='fa-solid fa-calendar'></i></InputGroupText>
                    <Input value={fecha} onChange={(e) => setFecha(e.target.value)}  type='date' required />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroupText><i className='fa-solid fa-clock'></i></InputGroupText>
                    <Input value={hora} onChange={(e) => setHora(e.target.value)}  type='time' required/>
                </InputGroup>
                <p className='text-center'><Button color='dark'>Reservar</Button></p>
            </Form>
    );
}

export default FormReservacion