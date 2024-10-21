let estudiantes = [
    {nombre: "erika", mota:9},
    {nombre: "xiomara", nota: 10},
    {nombre: "liseth", nota: 8}
];

let estudiantesModificados = estudiantes.map(estudiante =>
    estudiante.nombre === "erika"
    ? {...estudiante, nota: 6}
    : {...estudiante}
);

console.log(estudiantesModificados);
console.log(estudiantes);