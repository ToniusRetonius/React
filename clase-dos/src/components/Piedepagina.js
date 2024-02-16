import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Piedepagina extends React.Component{
    render(){
        return(<footer className="bg-dark text-light p-2 text-end fixed-bottom"> 
        {this.props.texto}
        </footer>
    )}
}

export default Piedepagina;