import { Button, Form, FloatingLabel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListadoDeCitas from "./ListadoDeCitas";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const FormularioCita = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const listaCitasLS = JSON.parse(localStorage.getItem("citas")) || [];
  const [listaCitas, setListaCitas] = useState(listaCitasLS);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(listaCitas));
  }, [listaCitas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const citaFiltrada = listaCitas.findIndex(
      (cita) => cita.hour === hora && cita.fech === fecha
    );
    if (citaFiltrada === -1) {
      const cita = {
        nomMascota: nombreMascota,
        nomDueño: nombreDuenio,
        fech: fecha,
        hour: hora,
        sint: sintomas,
      };

      Swal.fire({
        title: "Genial!",
        text: "Su cita fue guardada con éxito!",
        icon: "success",
      });

      setListaCitas([...listaCitas, cita]);
    } else {
      Swal.fire({
        title: "Ups!",
        text: "No puede haber dos citas con el mismo horario para el mismo dia!",
        icon: "error",
      });
    }

    setNombreMascota("");
    setNombreDuenio("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  return (
    <>
      <section className="container my-5 contPrincipal">
        <div className="p-4">
          <h5>Llenar el formulario para crear una cita</h5>
        </div>
        <div className="px-4 py-2">
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="nombreMascota"
              label="Nombre de la Mascota"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="nombre mascota"
                onChange={(e) => setNombreMascota(e.target.value)}
                value={nombreMascota}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="nombreDueño"
              label="Nombre del Dueño"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="nombre dueño"
                onChange={(e) => setNombreDuenio(e.target.value)}
                value={nombreDuenio}
                required
              />
            </FloatingLabel>
            <Row>
              <Col>
                <FloatingLabel controlId="fecha" label="Fecha" className="mb-3">
                  <Form.Control
                    type="date"
                    placeholder="fecha"
                    required
                    onChange={(e) => setFecha(e.target.value)}
                    value={fecha}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="hora" label="Hora" className="mb-3">
                  <Form.Control
                    type="time"
                    placeholder="hora"
                    onChange={(e) => setHora(e.target.value)}
                    value={hora}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel
              controlId="sintomas"
              label="Sintomas"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Escriba los sintomas"
                onChange={(e) => setSintomas(e.target.value)}
                value={sintomas}
                required
              />
            </FloatingLabel>
            <div className="py-3 text-center">
              <Button type="submit" className="btnGuardar">
                Guardar Cita
              </Button>
            </div>
          </Form>
        </div>
      </section>
      <ListadoDeCitas listaCitas={listaCitas}></ListadoDeCitas>
    </>
  );
};

export default FormularioCita;
