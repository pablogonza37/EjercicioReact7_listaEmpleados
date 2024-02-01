const EmpleadoAvatar = ({ empleado }) => {
  return (
    <img
      variant="top"
      src={`./src/asset/img/${empleado.pic}`}
      className="imgAvatar w-25 img-fluid"
    />
  );
};

export default EmpleadoAvatar;
