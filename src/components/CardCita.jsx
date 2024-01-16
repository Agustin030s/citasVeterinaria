import { Card, Button } from "react-bootstrap";

const CardCita = () => {
  return (
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
  );
};

export default CardCita;
