import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioCita from "./components/FormularioCita";

function App() {
  return (
    <>
      <h1 className="text-center py-5 display-3 titulo">
        Administrador de Pacientes de Veterinaria
      </h1>
      <FormularioCita></FormularioCita>
    </>
  );
}

export default App;
