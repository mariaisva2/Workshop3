let studentGrades = prompt("Ingresa las calificaciones de los estudiantes separadas por coma ");

let grades = studentGrades.split(",").map(e => parseFloat(e));

let average = grades.reduce((acc, el) => acc + el, 0) / grades.length;

console.log(`El promedio de las calificaciones es: ${average}`);