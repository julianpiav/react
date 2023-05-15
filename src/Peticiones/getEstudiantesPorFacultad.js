export const getEstudiantesPorFacultad = async (facultad, cantidadEstudiantes) => {

    const url = `http://localhost:8080/estudiantes/filtro?facultad=${facultad}&cantidadEstudiantes=${cantidadEstudiantes}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const listaEstudiantes = data.map(estudiante => ({
        id: estudiante.codigo,
        nombre: estudiante.nombre,
        semestre: estudiante.semestre,
        facultad: estudiante.facultad,
        programa: estudiante.programa
    }));
    return listaEstudiantes;

}
