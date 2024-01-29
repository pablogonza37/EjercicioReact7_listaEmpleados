const EmpleadoAvatar = ({ empleado }) => {
  const ruta = "./src/asset/" + empleado.pic;

  return <img variant="top" src={ruta} className="imgAvatar w-25 img-fluid" />;
};

export default EmpleadoAvatar;
