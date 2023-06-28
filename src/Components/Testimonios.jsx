import React, { useState,useEffect,useRef } from 'react'
import { Parser } from "html-to-react";
import {Row,Col,Card,CardBody,CardTitle,CardText} from 'reactstrap'
import { motion } from 'framer-motion';
import { fadeInUp,fadeInContainerWithStagger } from './Animaciones';

const Testimonios = (parametros) => {
  const tests = useRef(null);
  const [inViewport, setInViewport] = useState(false);
  const htmlParser = new Parser();
  useEffect(()=>{
    const onChange = entries => {
      entries.forEach(entry => {
        if (entry.target === tests.current) {
          if (entry.isIntersecting) {
            setInViewport(true);
          }
        }
      });
    };
    const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    observer.observe(tests.current);
  },[]);
  
  return (
    <div ref={tests}>
        {inViewport && (
          <motion.div
            variants={fadeInContainerWithStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
            <Row className='mt-5 bg-white shadow'>
              <Col md="12" >
              <p className='mt-3 h3 text-center'>Conoce la opinión de nuestros visitantes</p>
              </Col>
                { parametros.testimonios.map( (row,i)=>(
                <Col md="12" className='mt-3 mb-3' key={row.id}>
                <Card className=''>
                    <CardBody>
                        <CardTitle className='h5 text-title-card'>{row.cliente}</CardTitle>
                        <CardText>
                            {htmlParser.parse(row.descripcion)}
                        </CardText>
                    </CardBody>
                </Card>
                </Col>
              ))}
            </Row>
    </motion.div>
    </motion.div>
    )}
    </div>
  )
}

export default Testimonios