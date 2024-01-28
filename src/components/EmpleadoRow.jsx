import Card from 'react-bootstrap/Card';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = () => {
    return (
        <Card className='d-flex flex-row p-sm-2'>
        <EmpleadoAvatar></EmpleadoAvatar>
        <Card.Body className='w-75 d-flex flex-column text-start justify-content-center ms-lg-5 ms-md-3 ms-2'>
          <Card.Title>LAYA DUEÑAS</Card.Title>
          <Card.Text>
            CEO <span className="badge bg-secondary">Bussines</span>
          </Card.Text>     
        </Card.Body>
      </Card>    
    
    );
};

export default EmpleadoRow;