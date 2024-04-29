let flag = true;
const domainName = "myDomain.com"
const users = {}
while (flag) {
    const name = prompt("Por favor ingresa tu nombre completo: ").toLowerCase()
    if (!name) {
        console.log("No se aceptan entradas vacias")
        continue;
    }
    const splitFullName = name.split(" ")
    if (splitFullName.length > 2) {
        console.log("Por favor ingresa un nombre y un apellido valido")
        continue; 
    }
    
    const firstThreeName = splitFullName[0].slice(0, 3);
    const firstThreeLastName = splitFullName[1].slice(0, 3);
    let userName = `${firstThreeName}${firstThreeLastName}`;
    let email = `${userName}@${domainName}`

    const matches = checkUnique(userName) // returns count matches
    if (matches > 0) {
        userName += matches;
    }
    console.log(userName);
    Object.assign(users, {
        [userName]: email
    });
}

function checkUnique(username) {
    // Obtain user names
    const userKeys = Object.keys(users);
    let matches = 0
    userKeys.forEach(e => {
      
        let semiMatch = ""
        for (let i = 0; i < e.length; i++) {
            semiMatch += e[i];
            if (semiMatch === username) {
                matches++
            }
        }

    })
}

const userInputPassword = prompt(`Por favor ingresa tu contraseña segura, esta debe cumplir con las siguientes condiciones:
1. Al menos 8 caracteres
2. Al menos un número
3. Al menos una letra
4. Al menos un caracter especial: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \\ ~ \``);

const passwordChecker = (password) => {
    //  Minimo que tenga 8 caracteres
    const lengthChecker = password.length >= 8;

    // Que incluya una letra
    const letterChecker = /[a-zA-Z]/.test(password);

    // Que incluya un número
    const numberChecker = /\d/.test(password);

    // Que icluya un caracter especial
    const specialCharacterChecker = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);

    return lengthChecker && letterChecker && numberChecker && specialCharacterChecker;
};

const isValid = passwordChecker(userInputPassword);
console.log(`Contraseña ${isValid ? '' : 'in'}segura`);