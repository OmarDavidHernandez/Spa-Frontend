import { useState } from 'react'
import { Navbar,Nav,NavLink,NavbarBrand,NavbarToggler,NavbarText,Collapse,NavItem } from 'reactstrap'


const Encabezado = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header  className='mb-5'>
        <Navbar expand="lg" fixed="top" className='bg-blue' dark={true}>
        <NavbarBrand href="/">SPA Relaxin</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Servicios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Testimonios</NavLink>
            </NavItem>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
        </Navbar>
        <div id='inicio'></div>
        
    </header>

  )
}

export default Encabezado