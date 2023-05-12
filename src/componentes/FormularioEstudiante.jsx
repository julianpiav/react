export const FormularioEstudiante = ({ agregar, dato, setDato,edicion,setEdicion ,editar}) => {

    const enviar=(estudiante)=>{
        if(edicion===true){
            editarEstudiante(estudiante)
        }else{
            guardarEstudiante(estudiante)   
        }
    }

    const guardarEstudiante = () => {
        agregar(dato)
        setDato({
            nombre: "",
            semestre: "",
            facultad: "",
            programa:""
        })
    }
    const editarEstudiante=()=>{
        editar(dato)
        setDato({
            nombre: "",
            semestre: "",
            facultad: "",
            programa:""
        })
        setEdicion(false)
    }
    return (
        <>
            <form onSubmit={enviar}>
                <div className="row">
                    <div className="col-2 ">
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="col-2 ">
                        <input type="text" required={true} minLength={3} className="form-control" id="nombre" placeholder="Nombre Estudiante" value={dato.nombre} onChange={(event) => setDato({ ...dato, nombre: event.target.value })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 ">
                        <label htmlFor="semestre">Semestre</label>
                    </div>
                    <div className="col-2 ">
                        <select label="Semestre" required={true} value={dato.semestre} onChange={(event) => setDato({ ...dato, semestre: event.target.value })} className="form-control" id="semestre">
                            <option value="">Seleccione...</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 ">
                        <label htmlFor="facultad">Facultad</label>
                    </div>
                    <div className="col-2 ">
                        <select label="Facultad" required={true} value={dato.facultad} onChange={(event) => setDato({ ...dato, facultad: event.target.value })} className="form-control" id="facultad">
                            <option value="">Seleccione...</option>
                            <option value="Ingenieria">Ingenieria</option>
                            <option value="Medicina">Medicina</option>
                            <option value="Comunicacion">Comunicacion</option>
                            <option value="Derecho">Derecho</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 ">
                        <label htmlFor="programa">Programa</label>
                    </div>
                    <div className="col-2 ">
                        <input type="text" required={true} minLength={3} className="form-control" id="programa" placeholder="Escriba Programa" value={dato.programa} onChange={(event) => setDato({ ...dato, programa: event.target.value })} />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4 text-center" >
                        {edicion ? (
                            <button type="submit" className="btn btn-primary">Editar</button>
                            ) : (
                            <button type="submit" className="btn btn-primary">Registrar</button>
                            )
                        }
                    </div>
                </div>
            </form >
        </>
    )
}