import React from 'react'
import { useParams } from 'react-router-dom'
import FormServicios from '../../../Components/FormServicios'

const EditarServicio = () => {
  const {id} = useParams();
  return (
    <FormServicios id={id} titulo='Editar servicio' />
  )
}

export default EditarServicio