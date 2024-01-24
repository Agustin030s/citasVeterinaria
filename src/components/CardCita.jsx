import { Card, Button, Col } from "react-bootstrap";

const CardCita = ({cita, borrarCita}) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card>
        <Card.Header>
          <h6>Mascota: {cita.nomMascota}</h6>
          <p className="m-0">Dueño: {cita.nomDuenio}</p>
        </Card.Header>
        <Card.Body>
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-2">Fecha: </h6>
            <p className="mb-0">{cita.fech}</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-2">Hora: </h6>
            <p className="mb-0">{cita.hour}</p>
          </div>
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-2">Sintomas: </h6>
            <p className="mb-0">{cita.sint}</p>
          </div>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button onClick={() => borrarCita(cita.hour, cita.fech)} variant="danger">Borrar Cita</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardCita;
