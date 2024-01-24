import { Col, Row } from "react-bootstrap";
import CardCita from "./CardCita";

const ListadoDeCitas = ({listaCitas}) => {
  return (
    <section className="container my-2 p-4 listaCitas">
      {/* <h2>No hay citas aún</h2> */}
      <Row>
        <CardCita></CardCita>
      </Row>
    </section>
  );
};

export default ListadoDeCitas;
