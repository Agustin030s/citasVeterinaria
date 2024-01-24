import { Col, Row } from "react-bootstrap";
import CardCita from "./CardCita";

const ListadoDeCitas = ({ listaCitas }) => {
  const mostrarCard =
    listaCitas.length !== 0 ? (
      <Row>
        {listaCitas.map((cita, index) => <CardCita key={index} cita={cita}></CardCita>)}
      </Row>
    ) : (
      <h3 className="text-center py-3 bg-info">No hay citas aún</h3>
    );
  return (
    <section className="container my-2 p-4 listaCitas">{mostrarCard}</section>
  );
};

export default ListadoDeCitas;
