import React, { useState } from 'react';
import {
  Button,Carousel, CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption,Row,Col
} from 'reactstrap';

const items = [
  {
    src: 'https://www.banyantree.com/assets/2021-11/bt-puebla-spa2_0.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'img/spa2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'img/spa3.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
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
      <label className='h1 mt-5'>Benvenido a Relaxin SPA</label>
      <p className='text-green h4'>
      Somos un espacio dedicado a la realización de tratamientos para el cuidado de la belleza y generar equilibrio mental, espiritual y físico.
      </p>
      <p className='h5'>
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