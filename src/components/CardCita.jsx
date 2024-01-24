import { Card, Button, Col } from "react-bootstrap";

const CardCita = ({cita}) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card>
        <Card.Header>
          <h6>Mascota: Firulais</h6>
          <p className="m-0">Dueño: Josesito</p>
        </Card.Header>
        <Card.Body>
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-2">Fecha: </h6>
            <p className="mb-0">16/08/2024</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-2">Hora: </h6>
            <p className="mb-0">10:30</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-2">Sintomas: </h6>
            <p className="mb-0">Fiebre, tos, moquillo</p>
          </div>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button>Borrar Cita</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardCita;
