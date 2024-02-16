
import Cabecera from "./components/Cabecera";
import "bootstrap/dist/css/bootstrap.css";
import Piedepagina from "./components/Piedepagina";
import TodoList from "./components/TodoList";


function App() {
  return (
    <div>
      <Cabecera titulo="React's to do list"/>
      <main className="container w-50">
        <TodoList/>
      </main>
      <Piedepagina texto="Aunque por momentos dudes, aunque por momentos creas fervientemente que no, indefectiblemente, al final, ... -Adam Smith"/>
    </div>
  );
}

export default App;

