import './App.css'
import { Container } from 'reactstrap'
import Encabezado from './Components/Encabezado'
import Carrusel from './Components/Carrusel'
function App() {
  return (
    <>
    <Container fluid>
      <Encabezado />
      <Carrusel />
    </Container>
    </>
  )
}

export default App
