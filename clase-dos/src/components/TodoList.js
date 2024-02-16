// Componente de clase

import React, { Component } from "react";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            // guardo datos que se muestran(dinamicos), cuando cambia el estado, se refrescan
            tareaNueva: '',
            tareas : [
                {id:1, nombre:"Dejar a mi novia", done: false},
                {id:2, nombre:"Comprar falopa", done: false},
                {id:3, nombre:"Shortear BTC", done: false}
            ]
        }

    }

    agregarTarea(){
        if (this.state.tareaNueva.length > 0){
            this.setState({
            // este metodo modifica el estado y refresca el componente... es asincronico
            // Aca se agregaria la tarea nueva
                tareaNueva: '',
                tareas : [
                    {
                    id: this.state.tareas.length + 1, 
                    nombre : this.state.tareaNueva,
                    done: false
                    },
                    // spread operator >>> ... agarra el contenido y lo copia :  en este caso, toma todo el contenido del array tarea 
                    ...this.state.tareas
                ]
            })
        }
        
    }

    inputChange(evt){
        this.setState({tareaNueva : evt.target.value});
        
    }

    render(){
        return (<ul className="list-group">

            <li className="list-group-item active">Mi lista de Pendientes</li>

            <li className="list-group-item">

                <div className="input-group">

                <input 
                type="text" 
                className="form-control" 
                value={this.state.tareaNueva}
                onKeyUp={(evt) => {evt.code === "Enter" && this.agregarTarea()}}
                placeholder="Ingrese una nueva tarea" onChange={(evt) => {this.inputChange(evt)}}/>

                <button 
                className="btn btn-outline" 
                disabled={this.state.tareaNueva.length == 0} 
                onClick={this.agregarTarea.bind(this)}>
                    +
                </button>

                </div>

            </li>
            {
                this.state.tareas.map((tarea) => (
                    <li 
                    className="list-group-item" 
                    key={tarea.id}>{tarea.nombre}
                    </li>
                ))
            }
        </ul>
    )}
}

export default TodoList;


// el >> disabled={this.state.tareaNueva.length == 0} me bloquea el boton cuando no hay nada dentro del input!!
// onKeyUp={(evt) => {evt.code === "Enter" && this.agregarTarea()}} me permite utilizar el enter para agregar la data en el input