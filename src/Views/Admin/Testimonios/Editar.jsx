import React from 'react'
import { useParams } from 'react-router-dom'
import FormTestimonios from '../../../Components/FormTestimonios'

const EditarTestimonio = () => {
  const {id} = useParams();
  return (
    <FormTestimonios id={id} titulo='Editar testimonio' />
  )
}

export default EditarTestimonio