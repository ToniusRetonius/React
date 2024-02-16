// Componentes funcionales
// Las funciones Componentes arrancan con Mayuscula 

import "bootstrap/dist/css/bootstrap.css";


function Cabecera(props){
    return (<div className="alert alert-info text-center">
    <h1 className="display-1">{ props.titulo}</h1>
    <h1 className="display-2">{props.subtitulo}</h1>
    </div>)
}

export default Cabecera;
