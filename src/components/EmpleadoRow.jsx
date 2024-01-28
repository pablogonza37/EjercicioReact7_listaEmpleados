import Card from 'react-bootstrap/Card';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = () => {
    return (
        <Card className='d-flex flex-row'>
        <EmpleadoAvatar></EmpleadoAvatar>
        <Card.Body className='w-75 d-flex flex-column text-start justify-content-center ms-3'>
          <Card.Title>LAYA DUEÑAS</Card.Title>
          <Card.Text>
            CEO <span className="badge bg-secondary">Bussines</span>
          </Card.Text>     
        </Card.Body>
      </Card>    
    
    );
};

export default EmpleadoRow;