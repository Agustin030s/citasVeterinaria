import { Col, Row } from "react-bootstrap";
import CardCita from "./CardCita";

const ListadoDeCitas = () => {
  return (
    <section className="container my-2 p-4 listaCitas">
      {/* <h2>No hay citas aún</h2> */}
      <Row>
        <Col md={4} lg={3} className="mb-3">
          <CardCita></CardCita>
        </Col>
        <Col md={4} lg={3} className="mb-3">
          <CardCita></CardCita>
        </Col>
        <Col md={4} lg={3} className="mb-3">
          <CardCita></CardCita>
        </Col>
        <Col md={4} lg={3} className="mb-3">
          <CardCita></CardCita>
        </Col>
      </Row>
    </section>
  );
};

export default ListadoDeCitas;
