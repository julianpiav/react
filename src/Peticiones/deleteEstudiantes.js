export const deleteEstudiantes = async (estudiante) => {
    const url = `http://localhost:8080/estudiante/eliminar/${estudiante.id}`
    const resp = await fetch(url, {
        method: 'DELETE'
    });
    const respuesta = await resp.json();
    console.log(respuesta)

}