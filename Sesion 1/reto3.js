let email = prompt("Por favor ingrese su correo electrónico: ");
let symboloftherob = (el) => {
    return el.includes("@");
}
let pointaftertherob = (el) => {
   
    if (!symboloftherob(el)) return false;
   
    return el.split("@")[1].includes(".");
}
let pointandsymbol = (el) => {
   
    if (!symboloftherob(el)) return false;
    
    return !el.includes("@."); 
}
let checkNotEmptySpaces = (el) => {
    return !el.includes(" "); 
}
console.log("Correo electrónico válido");