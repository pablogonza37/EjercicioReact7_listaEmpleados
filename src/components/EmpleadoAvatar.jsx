import imagenes from "../asset/imagenes";

const EmpleadoAvatar = ({ empleado }) => {
 

  return <img variant="top" src={imagenes[empleado.id -1]} className="imgAvatar w-25 img-fluid" />;
};

export default EmpleadoAvatar;
