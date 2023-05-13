import { useEffect, useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { getEstudiantes } from "./Peticiones/getEstudiantes";
import { postEstudiantes } from "./Peticiones/postEstudiante";
import { putEstudiante } from "./Peticiones/putEstudiantes";
import { deleteEstudiantes } from "./Peticiones/deleteEstudiantes";



export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const [dato, setDato] = useState({ id: "", nombre: "", semestre: "", facultad: "" , programa: ""});
    const [edicion,setEdicion]=useState(false);

    const agregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante])
        postEstudiantes(estudiante);
    }
    const eliminarEstudiante =(estudiante)=>{
        setEstudiantes(estudiantes.filter((estu)=>estu.id!== estudiante.id));
        deleteEstudiantes(estudiante);
    }
    const editarEstudiante=(estudiante)=>{
        setEstudiantes(estudiantes.map((estu)=>{
            if(estu.id===estudiante.id){
                const estudianteModificado={
                ...estudiante,
                nombre : estudiante.nombre,
                semestre : estudiante.semestre,
                facultad : estudiante.facultad,
                programa : estudiante.programa
                }
                putEstudiante(estudianteModificado)
                return estudianteModificado  
            }
            return estu;
        }))
    }


    const cargueEstudiantes= async () => {
        const datos = await getEstudiantes();
        setEstudiantes(datos);
    }
    useEffect(()=>{
        cargueEstudiantes();
    },[])

    return (
        <>
            <FormularioEstudiante dato={dato} setDato={setDato} edicion={edicion} setEdicion={setEdicion}
                agregar={(estudianteNuevo) => {
                    agregarEstudiante(estudianteNuevo);
                }}
                editar={(estudianteEditado)=>{
                    editarEstudiante(estudianteEditado);
                }}
                />
            <TablaEstudiante listaEstudiantes={estudiantes}
                editarEstudiante={(estudiante)=>{
                    setDato(estudiante)
                    setEdicion(true)
                }}
                eliminarEstudiante={(estudiante)=>{
                    eliminarEstudiante(estudiante);
                }} />
        </>
    )
}
