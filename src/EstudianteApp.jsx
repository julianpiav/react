import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";

export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    console.log(estudiantes);

    const agregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante])
    }
    const eliminarEstudiante=(id)=>{
        setEstudiantes(estudiantes.filter((estudiante) => estudiante.id !== id))
    }

    return (
        <>
            <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu) }} />
            <TablaEstudiante listaEstudiantes={estudiantes} eliminar={(id) => {eliminarEstudiante(id)}}/>
        </>
    )
}