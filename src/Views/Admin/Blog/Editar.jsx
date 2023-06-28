import React from 'react'
import { useParams } from 'react-router-dom'
import FormBlog from '../../../Components/FormBlog'

const EditarBlog = () => {
  const {id} = useParams();
  return (
    <FormBlog id={id} titulo='Editar entrada de blog' />
  )
}

export default EditarBlog