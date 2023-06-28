import React, { useRef, useEffect, useState }  from 'react'
import { motion } from 'framer-motion';
import Carrusel from '../../Components/Carrusel'
import Servicios from '../../Components/Servicios'
import Ubicacion from '../../Components/Ubicacion'
import Testimonios from '../../Components/Testimonios'
import Articulos from '../../Components/Articulos'
import {Container,Row,Col} from 'reactstrap'
import { enviarPeticion,obtenerUrl } from '../../funciones'
import { fadeInUp,fadeInContainerWithStagger } from '../../Components/Animaciones';
const Pagina = () => {
  const imagenes = useRef(null);
  const [inViewport, setInViewport] = useState(false);
  useEffect(()=>{
    obtenerServicios();
    obtenerTestimonios();
    obtenerBlog();
    const onChange = entries => {
      entries.forEach(entry => {
        if (entry.target === imagenes.current) {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      });
    };
    const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    observer.observe(imagenes.current);
  },[]);
  const [servicios,setServicios] = useState([]);
  const [testimonios,setTestimonios] = useState([]);
  const [blog,setBlog] = useState([]);
  const obtenerServicios = async() =>{
    const res = await enviarPeticion('GET','','/servicios','');
    setServicios(res.data);
  }
  const obtenerTestimonios = async() =>{
    const res = await enviarPeticion('GET','','/testimonios','');
    setTestimonios(res.data);
  }
  const obtenerBlog = async() =>{
    const res = await enviarPeticion('GET','','/blog','');
    setBlog(res.data);
  }
  return (
    <>
    <Container fluid>
      <Row>
        <Col lg={{ offset: 2,size: 8}} md={{ offset: 1,size: 10}}>
          <Carrusel />
        </Col>
      </Row>
      <Row className='bg-brown'>
        <Col lg={{ offset: 2,size: 8}} md={{ offset: 1,size: 10}}>
        <Servicios servicios={servicios} url={obtenerUrl()} />
        </Col>
      </Row>
    </Container>
    <Container>
    </Container>
    <Container fluid>
      <div ref={imagenes}>
        {inViewport && (
          <motion.div
            variants={fadeInContainerWithStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <Row className='mt-3'>
                <Col md="6" lg="4" className='d-none d-lg-block'>
                  <img src='img/servicios1.jpg' className='img-fluid'></img>
                </Col>
                <Col md="6" lg="4">
                  <img src='img/servicios2.jpg' className='img-fluid'></img>
                </Col>
                <Col md="6" lg="4">
                  <img src='img/servicios3.jpg' className='img-fluid'></img>
                </Col>
              </Row>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Container>
    <Container>
      <Ubicacion  servicios={servicios} />
      </Container>
      <Container   id='testimonios'>
      <Testimonios  testimonios={testimonios}/>
    </Container>
    <Container fluid className='btn-green mt-3 mb-3'>
        <Articulos blog={blog} url={obtenerUrl()} />
    </Container>
    </>
  )
}

export default Pagina