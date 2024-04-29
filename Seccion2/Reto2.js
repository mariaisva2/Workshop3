// Calculadora de estadisticas de calificaciones

const studentGrades = prompt("Por favor ingresa las calificaciones de los estudiantes separadas por coma: ");

const grades = studentGrades.split(",").map(e => parseInt(e));
const average = grades.reduce((acc, el) => acc + el, 0) / grades.length;

const maxGrade = Math.max(...grades);

const maxGrade2 = grades.reduce((acc, el) => Math.max(acc, el), 0);

const minGrade = Math.min(...grades);

const minGrade2 = grades.reduce((acc, el) => Math.min(acc, el), 10);

const approved = grades.filter(e => e >= 70).length;

const failed = grades.filter(e => e < 70).length;

const sortedGrades = grades.sort((a, b) => b - a);

grades.sort((a, b) => b - a);

console.log(`El promedio de las calificaciones es: ${average}`);
console.log(`La calificacion mas alta es: ${maxGrade}`);
console.log(`La calificacion mas baja es: ${minGrade}`);
console.log(`El numero de aprobados es: ${approved}`);
console.log(`El numero de reprobados es: ${failed}`);
console.log(`Las calificaciones ordenadas de mayor a menor son: ${sortedGrades.join(", ")}`);

