import imagenes from "../asset/imagenes";

const EmpleadoAvatar = ({ empleadokey }) => {
  console.log(empleadokey)
  return (
    <img
      variant="top"
      src={imagenes[empleadokey - 1]}
      className="imgAvatar w-25 img-fluid"
    />
  );
};

export default EmpleadoAvatar;
