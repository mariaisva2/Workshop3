const eventList = [];
let id = 0;

while (true) {
    const userInput = prompt(`Por favor ingresa una de las siguientes opciones:
                            \n 1. Crear un evento 
                            \n 2. Ver eventos
                            \n 3. Buscar eventos por nombre
                            \n 4. Actualizar evento
                            \n 5. Eliminar evento
                            \n 6. Salir`);

    switch (userInput) {
        case "1":
            const eventName = prompt("Por favor ingresa el nombre del evento: ");
            const eventDate = prompt("Por favor ingresa la fecha del evento (YYYY-MM-DD): ");
            const eventDescription = prompt("Por favor ingresa la descripción del evento: ");
            const event = {
                id: id++,
                eventName,
                eventDate,
                eventDescription
            };
            eventList.push(event);
            break;

        case "2":
            if (eventList.length === 0) {
                console.log("No hay eventos registrados.");
            } else {
                console.log("Lista de eventos:");
                eventList.forEach(event => {
                    console.log(`ID: ${event.id}, Nombre: ${event.eventName}, Fecha: ${event.eventDate}, Descripción: ${event.eventDescription}`);
                });
            }
            break;

        case "3":
            const searchName = prompt("Por favor ingresa el nombre del evento que deseas buscar: ");
            const foundEventsByName = eventList.filter(event => event.eventName === searchName);
            if (foundEventsByName.length === 0) {
                console.log("No se encontraron eventos con ese nombre.");
            } else {
                console.log("Eventos encontrados:");
                foundEventsByName.forEach(event => {
                    console.log(`ID: ${event.id}, Nombre: ${event.eventName}, Fecha: ${event.eventDate}, Descripción: ${event.eventDescription}`);
                });
            }
            break;

        case "4":
            const eventIdToUpdate = parseInt(prompt("Por favor ingresa el ID del evento que deseas actualizar: "));
            const eventToUpdate = eventList.find(event => event.id === eventIdToUpdate);
            if (eventToUpdate) {
                const updatedEventName = prompt(`Nuevo nombre del evento (${eventToUpdate.eventName}): `) || eventToUpdate.eventName;
                const updatedEventDate = prompt(`Nueva fecha del evento (${eventToUpdate.eventDate}): `) || eventToUpdate.eventDate;
                const updatedEventDescription = prompt(`Nueva descripción del evento (${eventToUpdate.eventDescription}): `) || eventToUpdate.eventDescription;
                eventToUpdate.eventName = updatedEventName;
                eventToUpdate.eventDate = updatedEventDate;
                eventToUpdate.eventDescription = updatedEventDescription;
                console.log("Evento actualizado con éxito.");
            } else {
                console.log("No se encontró un evento con ese ID.");
            }
            break;

        case "5":
            const eventIdToDelete = parseInt(prompt("Por favor ingresa el ID del evento que deseas eliminar: "));
            const indexToDelete = eventList.findIndex(event => event.id === eventIdToDelete);
            if (indexToDelete !== -1) {
                eventList.splice(indexToDelete, 1);
                console.log("Evento eliminado con éxito.");
            } else {
                console.log("No se encontró un evento con ese ID.");
            }
            break;

        case "6":
            console.log("Saliendo del sistema de gestión de eventos...");
            // Terminar el bucle y salir del programa
            break;

        default:
            console.log("Opción no válida. Por favor ingresa un número del 1 al 6.");
            break;
    }

    // Salir del bucle si el usuario elige la opción 6
    if (userInput === "6") {
        break;
    }
}
