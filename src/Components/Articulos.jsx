import React, { useState,useEffect,useRef } from 'react';
import {Row,Col,Card,CardBody,CardTitle,CardText,Button,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { Parser } from 'html-to-react';
import { motion } from 'framer-motion';
import { fadeInUp,fadeInContainerWithStagger } from './Animaciones';

const Articulos = (parametros) => {
  const tars = useRef(null);
  const [inViewport, setInViewport] = useState(false);
  const [modal, setModal] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  useEffect(()=>{
    const onChange = entries => {
      entries.forEach(entry => {
        if (entry.target === tars.current) {
          if (entry.isIntersecting) {
            setInViewport(true);
          }
        }
      });
    };
    const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    observer.observe(tars.current);
  },[]);
  const abrirModal = (ti,te) =>{
    setTitulo(ti);
    setTexto(te);
    setModal(true);
  }
  const toggleModal = () => {
    setModal(!modal);
  }
  const htmlParser = new Parser();
  return (
    <div ref={tars}>
        {inViewport && (
          <motion.div
            variants={fadeInContainerWithStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
            <Row className='mt-5' id='servicios'>
              <Col md="12" className='mb-5'>
              <p className='h3 text-center mt-3'>Lee nuestros artículos de bienestar y salud</p>
              </Col>
                { parametros.blog.map( (row,i)=>(
                <Col sm='6' md='6' lg='4' xxl='3' className='mb-3' key={row.id}>
                <Card className='bg-light shadow'>
                <img className='rounded' src={parametros.url+row.imagen} height='200px'></img>
                    <CardBody className='card-blog'>
                        <CardTitle className='h5 text-center mb-3'>{row.titulo}</CardTitle>
                        <CardText className='text-justificado mt-2'>
                            {htmlParser.parse(row.descripcion.substring(0, 250)) }
                            {' ...'}
                        </CardText>
                        <CardText className='text-center'>
                            <Button onClick={ () => abrirModal(row.titulo,htmlParser.parse(row.descripcion))} color='green' className='mb-3'>Leer más</Button>
                        </CardText>
                    </CardBody>
                </Card>
                </Col>
              ))}
              <Modal isOpen={modal} toggle={toggleModal} size='lg'>
                <ModalHeader toggle={toggleModal}>{ titulo }</ModalHeader>
                <ModalBody>
                  {texto}
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggleModal}>
                    Cerrar
                  </Button>
                </ModalFooter>
              </Modal>
            </Row>
            </motion.div>
          </motion.div>
          )}
        </div>
    
  )
}

export default Articulos