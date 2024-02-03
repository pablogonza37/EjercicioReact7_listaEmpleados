
const EmpleadoAvatar = ({item}) => {
  
  return (
    <img
      variant="top"
      src={`/${item.pic}`}
      className="imgAvatar w-25 img-fluid"
    />
  );
};

export default EmpleadoAvatar;
