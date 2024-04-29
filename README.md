<!-- Taller 3: Cuerdas, Arrays y Objetos
Este taller tiene como objetivo poner en práctica los conceptos de cadenas, matrices y objetos en JavaScript.
Requisitos
Conocimiento básico de array, string y object en JavaScript.
Conocimiento básico de métodos array y string en JavaScript.
Objetivos
Practicar el uso de cadenas, matrices y objetos en JavaScript.
Practicar el uso de métodos de cadenas y matrices en JavaScript.
Instrucciones
Crea un repositorio en GitHub llamado strings-arrays-objects.
Crea una carpeta llamada taller-3y dentro de ella crea un archivo README.md.
Copia y pega el contenido de este archivo en tu README.md.
Siga las instrucciones de la sección de cada ejercicio.
Descripción
Sección 1: Cuerdas y Objetos
Objetivo : Aplicar métodos de manipulación de cadenas para resolver problemas comunes de programación. Además, utilizar métodos de objetos para interactuar y manipular datos dentro de objetos JavaScript.

Reto 1: Generador de Nombres de Usuario (username) y Correos Electrónicos (email) con el dominio myDomain.com

Cree un script que genere nombres de usuario y correo electrónico a partir de un nombre y apellido y guarde en un objeto llave:valor - nombre de usuario:correo electrónico. El guión debe cumplir con las siguientes condiciones:

Solicitud de Datos:

Solicita al usuario que ingrese su nombre y apellido por aviso().
Normalización:

Convierta el nombre y apellido ingresados ​​a minúsculas para estandarizar el formato utilizando toLowerCase().
Separación y Extracción:

Utiliza split() para separar el nombre completo en una matriz de dos elementos, uno para el nombre y otro para el apellido.
Aplicación slice() para obtener las primeras tres letras del nombre y las primeras tres letras del apellido.
Generación del Nombre de Usuario:

Concatena las letras obtenidas de nombre y apellido para formar una base para el nombre de usuario.
Generación del Correo Electrónico:

Concatena el nombre de usuario con el dominio myDomain.com para formar el correo electrónico. Por ejemplo:
Nombre de usuario: johndoe
Correo Electrónico: johndoe@myDomain.com
Almacena el nombre de usuario generado en un objeto global llamado 'users' con el nombre de usuario como clave y el correo electrónico como valor. Por ejemplo: - Nombre de Usuario: johndoe - Correo Electrónico: johndoe@miDominio.com - usuarios = { johndoe: ' johndoe@miDominio.com ' }

Verificación de Unicidad:

Verifica si el nombre de usuario generado ya existe en el objeto 'users'. Utiliza Object.keys() para obtener un array con las claves del objeto. Utiliza include() para verificar si el nombre de usuario ya existe.
Si el nombre de usuario ya existe, agregue un número al final del nombre de usuario y actualice el correo electrónico correspondiente. Por ejemplo, si 'johndoe' ya existe, el nuevo nombre de usuario será 'johndoe1' y el correo electrónico será ' johndoe1@myDomain.com '.
Nota: Puedes utilizar bucles for, while y estructuras condicionales como if/else para resolver este reto, pero te recomiendo que utilices métodos de strings y arrays para simplificar la solución.

Reto 2: Validador de Contraseñas seguras

Cree un script que valide contraseñas seguras. El guión debe cumplir con las siguientes condiciones:

Solicita al usuario que ingrese una contraseña mediante Prompt().
Verifique si la contraseña ingresada tiene al menos 8 caracteres.
Verifica si la contraseña contiene al menos un número.
Verifique si la contraseña contiene al menos una letra.
Verifica si la contraseña contiene al menos un carácter especial. Los caracteres especiales permitidos son los siguientes: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \ ~ `
Si la contraseña cumple con todas las condiciones, muestra un mensaje de "Contraseña segura".
Si la contraseña no cumple con alguna de las condiciones, muestra un mensaje de "Contraseña insegura" y una lista de las condiciones que no cumple.
Reto 3: Validador de Correos Electrónicos

Cree un script que valide correos electrónicos. El guión debe cumplir con las siguientes condiciones:

Solicita al usuario que ingrese un correo electrónico por aviso().
Verifica si el correo electrónico ingresado tiene un formato válido. Un correo electrónico válido debe cumplir con las siguientes condiciones:
Debe contener un solo símbolo '@'.
Debe contener al menos un punto '.' después del símbolo '@'.
El punto '.' y el símbolo '@' no pueden estar juntos.
El correo electrónico no puede contener espacios en blanco.
Si el correo electrónico cumple con todas las condiciones, muestra un mensaje de "Correo electrónico válido".
Reto 4: Sistema de gestión de eventos

Desarrollar un sistema en JavaScript para crear, actualizar, buscar y eliminar eventos. Cada evento estará representado como un objeto con varias propiedades, y todos los eventos se almacenarán en una colección (objeto o matriz).

Herramientas a utilizar:

Métodos de cadenas: split(), toLowerCase(), include(), trim(), replace()
Métodos de objetos: Object.keys(), Object.values(), Object.entries(), Object.assign()
Funcionalidades:

Creación de Eventos:
Descripción: Permitir al usuario ingresar detalles de un evento, como nombre, fecha, y descripción, y almacenar estos detalles en un objeto.
Tareas:
Solicitar datos del evento al usuario.
Crear un objeto de evento con un identificador único. Por ejemplo:
const event1 = {
    id: 1, // Identificador único
    name: 'Evento 1', // Nombre del Evento
    date: '2021-12-31', // Fecha del Evento
    description: 'Descripción del Evento 1' // Descripción del Evento
}
Almacenar el evento en una lista de eventos.
Métodos utilizados: Object.assign(), toLowerCase(), trim()
Visualización y Búsqueda de Eventos
Descripción: Permitir al usuario ver todos los eventos almacenados y buscar eventos por nombre.
Tareas:
Listar todos los eventos con Object.values().
Implementar una función de búsqueda que utilice include() para encontrar eventos por nombre.
Métodos utilizados: toLowerCase(), include()
Actualización de Eventos
Descripción: Permitir al usuario actualizar los detalles de un evento existente.
Tareas:
Solicitar el identificador del evento a actualizar.
Permitir al usuario modificar cualquier campo del evento.
Actualizar el objeto del evento.
Métodos utilizados: Object.keys(), Object.assign(), split(), trim()
Eliminación de Eventos
Descripción: Permitir al usuario eliminar un evento existente.
Tareas:
Solicitar el identificador del evento a eliminar.
Eliminar el objeto de evento de la lista de eventos.
Métodos utilizados: Object.keys(), Object.values(), filter()
Sección 2: Arrays y Objetos
Objetivo : Aplicar métodos de manipulación de arrays para resolver problemas comunes de programación. Además, utilizar métodos de objetos para interactuar y manipular datos dentro de objetos JavaScript.

Reto 1: Calculadora de Promedio de Calificaciones

Crea un script que calcule el promedio de calificaciones de un estudiante. El guión debe cumplir con las siguientes condiciones:

Solicita al usuario que ingrese las calificaciones del estudiante separadas por comas.
Convierte las calificaciones ingresadas a un array utilizando split().
Utilice reduce() para sumar todas las calificaciones y calcular el promedio.
Muestra el promedio de calificaciones al usuario.
Reto 2: Calculadora de Estadísticas de Calificaciones

Crear un script que calcule estadísticas de calificaciones de un grupo de estudiantes. El guión debe cumplir con las siguientes condiciones:

Solicita al usuario que ingrese las calificaciones de los estudiantes separados por comas.
Convierte las calificaciones ingresadas a un array utilizando split().
Utiliza métodos de matrices como reduce(), map(), filter(), sort() para calcular las siguientes estadísticas:
Promedio de Calificaciones
Calificación Máxima
Calificación Mínima
Número de Aprobados (calificación mayor o igual a 70)
Número de reprobados (calificación menor a 70)
Lista de Calificaciones Ordenadas de Mayor a Menor
Muestra las estadísticas de calificaciones al usuario.
Reto 3: Sistema de Gestión de Inventario

Desarrollar un sistema en JavaScript para gestionar un inventario de productos. Cada producto estará representado como un objeto con varias propiedades, y todos los productos se almacenarán en una colección (objeto o array).

Herramientas a utilizar:

Métodos de matrices: push(), pop(), shift(), unshift(), splice(), slice(), map(), filter(), reduce(), sort(), entre otros.
Métodos de objetos: Object.keys(), Object.values(), Object.entries(), Object.assign()
Funcionalidades:

Creación de Productos:
Descripción: Permitir al usuario ingresar detalles de un producto, como nombre, precio, cantidad, y descripción, y almacenar estos detalles en un objeto.
Duplicación de Productos:
Descripción: Permitir al usuario duplicar un producto existente.
Nota: La duplicación de productos debe mantener un identificador único para cada producto, por lo que el identificador del producto duplicado debe ser diferente al original (recomendación: el id debe ser el último + 1). El nombre del producto debe tener un sufijo 'Copia' para indicar que es una copia. Por ejemplo:
Producto original:
const product1 = {
    id: 1,
    name: 'Producto 1',
    price: 100,
    quantity: 10,
    description: 'Descripción del Producto 1'
}
Producto Duplicado:
const product2 = {
    id: 2,
    name: 'Producto 1 Copy',
    price: 100,
    quantity: 10,
    description: 'Descripción del Producto 1'
}
Si ya existe un producto con el sufijo 'Copy', el nuevo producto debe tener un sufijo 'Copy 2' y así sucesivamente.
Visualización y Búsqueda de Productos
Descripción: Permitir al usuario ver todos los productos almacenados y buscar productos por nombre y por precio.
Nota: La búsqueda de productos por precio debe permitir al usuario ingresar un rango de precios (precio mínimo y precio máximo) y mostrar todos los productos que se encuentren dentro de ese rango.
Actualización de productos
Descripción: Permitir al usuario actualizar los detalles de un producto existente.
Nota: El usuario debe poder modificar cualquier campo del producto, incluido el nombre, precio, cantidad y descripción. ¿Cómo modificar? Puedes utilizar el id del producto para buscarlo y luego actualizar sus propiedades de la siguiente manera mutando el objeto original:
const product = products.find(product => product.id === id);
product.name = 'Nuevo Nombre';
product.price = 200;
product.quantity = 20;
product.description = 'Nueva Descripción';
Eliminación de Productos
Descripción: Permitir al usuario eliminar un producto existente. ¿Como eliminar? Puedes utilizar el id del producto para buscarlo y luego eliminarlo de la lista de productos de la siguiente manera:
products = products.filter(product => product.id !== id);
Verificación de Existencia de Productos e Inventario
Descripción: Verifique si existe un producto en el inventario y si hay suficiente cantidad disponible para vender. Si el producto no existe o la cantidad disponible es insuficiente, muestre un mensaje de error al usuario.
Nota: Utilice some() para verificar si existe un producto y filter() para verificar si hay suficiente cantidad disponible.
Venta de Productos
Descripción: Permitir al usuario vender un producto y actualizar (restar) la cantidad disponible en el inventario.
Compra de Productos
Descripción: Permitir al usuario comprar un producto y actualizar (añadir) la cantidad disponible en el inventario.
Cálculo de Valor Total del Inventario
Descripción: Calcular el valor total del inventario sumando el precio de todos los productos disponibles.
Ordenamiento de Productos
Descripción: Permitir al usuario ordenar los productos por precio y cantidad de forma ascendente o descendente.
Nota: Utiliza sort() para ordenar los productos por nombre, precio, cantidad y descripción.
Identificación de productos con posibles malas palabras en la descripción
Descripción: Identificar productos con posibles malas palabras en la descripción y hacer una copia profunda del objeto con el Object.assign({}, product) crear una lista de nombre blacklistedProducts con los productos que contienen malas palabras en la descripción.
Lista de malas palabras: ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5']
Informe General de Productos
Descripción: Generar un reporte de productos que incluye cantidad de productos, valor total del inventario, cantidad de productos más caros, cantidad de productos más baratos, cantidad de productos con mayor y menor cantidad disponible y cantidad de productos con posibles malas palabras en la descripción. .
¡Importante! Recuerda que por experiencia de usuario, las malas palabras en la descripción de los productos deben ser reemplazadas por asteriscos (*) para evitar ofensas, así que cada vez que encuentres una mala palabra en la descripción de un producto, reemplazala por asteriscos, de modo que en ningún servicio, a excepción del reporte general, se muestren las malas palabras.

Nota: Puedes utilizar bucles for, while y estructuras condicionales como if/else para resolver este reto, pero te recomiendo que utilices métodos de strings y arrays para simplificar la solución. -->