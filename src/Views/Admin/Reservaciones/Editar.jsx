import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import FormReservacion from '../../../Components/FormReservacion'
import { enviarPeticion } from '../../../funciones'
import {Row,Col} from 'reactstrap'

const EditarReservacion = () => {
    const {id} = useParams();
    const [servicios,setServicios] = useState([]);
    useEffect(()=>{
        obtenerServicios();
    },[]);
    const obtenerServicios = async() =>{
        const res = await enviarPeticion('GET','','/servicios','');
        setServicios(res.data);
      }
  return (
    <Row>
      <Col md={{ offset: 3,size: 6}} className='bg-white shadow mt-5'>
      <FormReservacion id={id} servicios={servicios} titulo='Editar Reservacion'  redir='/reservaciones'  />
      </Col>
    </Row>
  )
}

export default EditarReservacion