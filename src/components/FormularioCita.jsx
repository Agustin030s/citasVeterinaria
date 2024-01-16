import { Button, Form, FloatingLabel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FormularioCita = () => {
  return (
    <section className="container my-5 contPrincipal">
      <div className="p-4">
        <h5>Llenar el formulario para crear una cita</h5>
      </div>
      <div className="px-4 py-2">
        <Form>
          <FloatingLabel
            controlId="nombreMascota"
            label="Nombre de la Mascota"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="nombre mascota" required />
          </FloatingLabel>
          <FloatingLabel
            controlId="nombreDueño"
            label="Nombre del Dueño"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="nombre dueño" required />
          </FloatingLabel>
          <Row>
            <Col>
              <FloatingLabel controlId="fecha" label="Fecha" className="mb-3">
                <Form.Control type="date" placeholder="fecha" required />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="hora" label="Hora" className="mb-3">
                <Form.Control type="time" placeholder="hora" required />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel controlId="sintomas" label="Sintomas" className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Escriba los sintomas"
              required
            />
          </FloatingLabel>
          <div className="py-3 text-center">
            <Button type="submit" className="btnGuardar">Guardar Cita</Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default FormularioCita;
