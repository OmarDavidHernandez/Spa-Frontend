import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { Navbar,Nav,NavLink,NavbarBrand,NavbarToggler,NavbarText,Collapse,NavItem, Button } from 'reactstrap'
import Storage from './Storage';
const Encabezado = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const ir = useNavigate();
  const salir = () =>{
    Storage.remove('authToken');
    Storage.remove('authUser');
    ir('/login');
  }
  return (
    <header className='mb-5'>
        <Navbar expand="lg" fixed="top" className='bg-blue' dark={true}>
        <NavbarBrand href="/">SPA Relaxin</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/#servicios">Servicios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#reservacion">
                Reservaciones
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#testimonios">
                Testimonios
              </NavLink>
            </NavItem>
          </Nav>
          
          { Storage.get('authUser') ? (
            <>
            <NavLink href="/admin" className='text-white h3 me-md-5'>
              {Storage.get('authUser').nombre}
            </NavLink>
            <NavbarText>
              <Button color='blue text-white' onClick={salir}>Salir</Button>
            </NavbarText>
            </>
            ) : ''}
          
        </Collapse>
        </Navbar>
    </header>
  )
}

export default Encabezado