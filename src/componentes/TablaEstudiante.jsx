import React, { useState } from "react";
export const TablaEstudiante = ({ listaEstudiantes,editarEstudiante, eliminarEstudiante }) => {
    const [facultadSeleccionada, setFacultadSeleccionada] = useState("");

    const filtrarPorFacultad = () => {
      if (facultadSeleccionada !== "") {
        const estudiantesFiltrados = listaEstudiantes.filter((estudiante) => estudiante.facultad === facultadSeleccionada);
        return estudiantesFiltrados;
      } else {
        return listaEstudiantes;
      }
    };
  
    const estudiantesMostrados = filtrarPorFacultad();
    return (
        <>
            <div>
                <label htmlFor="facultad">Busqueda por Facultad:</label>
                <select id="facultad" value={facultadSeleccionada} onChange={(e) => setFacultadSeleccionada(e.target.value)}>
                    <option value="">Seleccione una Facultad</option>
                    <option value="Ingenieria">Ingenieria</option>
                    <option value="Medicina">Medicina</option>
                    <option value="Comunicacion">Comunicacion</option>
                    <option value="Derecho">Derecho</option>
                </select>
                <button onClick={filtrarPorFacultad}>Filtrar</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id Estudiante</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Semestre</th>
                        <th scope="col">Facultad</th>
                        <th scope="col">Programa</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        estudiantesMostrados.map((estudiante) => 
                            <tr key={estudiante.id}>
                                <td>{estudiante.id}</td>
                                <td>{estudiante.nombre}</td>
                                <td>{estudiante.semestre}</td>
                                <td>{estudiante.facultad}</td>
                                <td>{estudiante.programa}</td>
                                <td>
                                    <button className="btn btn-info" onClick={()=>editarEstudiante(estudiante)}>Editar</button>{" "} 
                                    <button className="btn btn-info" onClick={()=>eliminarEstudiante(estudiante)} >Eliminar </button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}

// const [facultadSeleccionada, setFacultadSeleccionada] = useState(null);

// const handleFacultadSeleccionada = (event) => {
//     setFacultadSeleccionada(event.target.value);
//     getEstudiantesPorFacultad(event.target.value);
// };

// const handleClickBoton = () => {
//     console.log(facultadSeleccionada);
// };

// <div className="row">
// <div className="col-2 ">
//     <label htmlFor="Filtar">Filtrar por Facultad </label>
// </div>
// <div className="col-2 ">
//     <select label="Filtrar" required={true} onChange={handleFacultadSeleccionada}>    
//         <option value="">Seleccione...</option>
//         <option value="Ingenieria">Ingenieria</option>
//         <option value="Medicina">Medicina</option>
//         <option value="Comunicacion">Comunicacion</option>
//         <option value="Derecho">Derecho</option>
//     </select>
// </div>
// <div className="col-md-4 text-center" >
//     <button onClick={handleClickBoton}>Filtar</button>
// </div>
// </div>