import "bootstrap/dist/css/bootstrap.css";
import Cabecera from "./components/Cabecera";
import Lista from "./components/Lista";

function App() {
  return (
    <div>
      <Cabecera titulo="Bienvenidos" subtitulo="A mi primer aplicacion en REACT" />
      <main className="container w-50">
        <Lista />
      </main>
    </div>
  );
}

export default App;
