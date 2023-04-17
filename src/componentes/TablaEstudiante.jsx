import { useState } from "react";

export const TablaEstudiante = ({ listaEstudiantes }, {eliminar}) => {
    const [search, setSearch] = useState("");
    let estudiantesFiltrados = listaEstudiantes

    if(search!=""){
        estudiantesFiltrados= listaEstudiantes.filter((estudiante)=> estudiante.nombre===search);
    }
    return (
        <>
        <div>
            Buscar estudiante:
        <input type="text" className="form-control" placeholder="Buscar Estudiante" value={search} onChange={(event) => setSearch(event.target.value)} />

        </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id Estudiante</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Semestre</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        estudiantesFiltrados.map((estudiante) => <tr key={estudiante.id}>
                            <td>{estudiante.id}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.semestre}</td>
                            <td> <button className="btn btn-info" onClick={eliminar(estudiante.id)}>Eliminar</button></td>
                            <td> <button className="btn btn-info" >Editar</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}