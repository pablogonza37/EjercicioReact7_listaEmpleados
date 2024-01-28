import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer';
import EmpleadoList from './components/EmpleadoList';

function App() {

  return (
    <>
      <Container className='mainPage my-3'>
        <h1 className='h1 display-3 text-center'>Lista de empleados</h1>
        <EmpleadoList/>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App
