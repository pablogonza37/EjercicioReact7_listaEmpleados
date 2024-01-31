import Card from "react-bootstrap/Card";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleado }) => {
  return (
    <Card className="d-flex flex-row p-sm-2 px-lg-5 bg-light-subtle bg-light shadow-lg m-1">
      <EmpleadoAvatar empleado={empleado}></EmpleadoAvatar>
      <Card.Body className="w-75 d-flex flex-column text-start justify-content-center ms-lg-5 ms-md-3 ms-2 px-lg-5">
        <Card.Title>{empleado.fullName}</Card.Title>
        <Card.Text>
          {empleado.title}{" "}
          <span className="badge bg-secondary">{empleado.department}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EmpleadoRow;
