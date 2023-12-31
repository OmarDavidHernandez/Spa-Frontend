import React, { useState } from 'react';
import {
  Button,Carousel, CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption,Row,Col
} from 'reactstrap';

const items = [
  {
    src: 'img/spa6.jpg',
    altText: 'Slide 1',
    caption: '',
    key: 1,
  },
  {
    src: 'img/spa5.png',
    altText: 'Slide 2',
    caption: '',
    key: 2,
  },
  {
    src: 'img/spa3.jpg',
    altText: 'Slide 3',
    caption: '',
    key: 3,
  },
  {
    src: 'img/spa1.png',
    altText: 'Slide 4',
    caption: '',
    key: 4,
  },
];
const Carrusel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
    const slides = items.map((item) => {
        return (
          <CarouselItem 
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} className='imagenescar' />
            <CarouselCaption
              captionText={item.caption}
              captionHeader={item.caption}
            />
          </CarouselItem>
        );
      });
  return (
    
    <Row className='mt-3'>
    <Col md="6">
      <label className='h1 mt-5'>Bienvenido a Relaxin SPA</label>
      <p className='text-green h4 text-justificado'>
      Somos un espacio dedicado a la realización de tratamientos para el cuidado de la belleza y generando equilibrio mental, espiritual y físico.
      </p>
      <p className='h5 text-justificado'>
      Buscamos siempre la innovación y calidad en nuestros productos y servicios, la capacitación es constante en todas las áreas.
      </p>
    </Col>
    <Col md="6">
    <Carousel
    activeIndex={activeIndex}
    next={next}
    previous={previous}
    
  >
    <CarouselIndicators
      items={items}
      activeIndex={activeIndex}
      onClickHandler={goToIndex}
    />
    {slides}
    <CarouselControl
      direction="prev"
      directionText="Previous"
      onClickHandler={previous}
    />
    <CarouselControl
      direction="next"
      directionText="Next"
      onClickHandler={next}
    />
  </Carousel>
    </Col>
  </Row>
  
  )
}

export default Carrusel