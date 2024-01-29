import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({empleados}) => {
  return (
    <section className=" seccionEmpleados text-center container p-lg-5">
      
      {empleados.map(empleado => (
        <EmpleadoRow key={empleado.id} empleado={empleado}/>
      ))}
    </section>
  );
};

export default EmpleadoList;
