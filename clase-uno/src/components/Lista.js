import "bootstrap/dist/css/bootstrap.css";

const alumnos = [
    <li className="list-group-item">Ivan Wigor</li>,
    <li className="list-group-item">Jaquelin</li>,
    <li className="list-group-item">Facundo Dauria</li>,
    <li className="list-group-item">Daniel Azzi</li>,
    <li className="list-group-item">Ale Bogado</li>,
    <li className="list-group-item">Omar Zarate</li>,
    <li className="list-group-item">Victoria Andres</li>,
    <li className="list-group-item">Marcelo</li>
]

const alumnos = [
    {id: 1, nombre: "Flor"},
    {id: 2, nombre: "Luli"},
    {id: 3, nombre: "Tomi"},
    {id: 4, nombre: "Maxi"}

]

export default function Lista(props) {
    return (
        <ul className="list-group">
            <li className="list-group-item active text-center">
                Lista de Alumnos
            </li>
            {alumnos}
        </ul>
    )
}
//Alt + Shift + flecha para escribir en simultaneo