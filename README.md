# Norelian - Implementation backend/frontend

Este proyecto base es diseñado para implementar una comunicación entre una aplicación de frontend implementada en Angular y una aplicación de backend implementada en ExpressJS.

## Como iniciar

Iniciar aplicación de frontend.

- Clonar repositorio
- Ubicarse en el directorio src/frontend/
- 'npm install' para instalar las dependencias necesarias
- 'npm start' para correr la aplicacion de frontend.
- Entrar por el navegador a http://localhost:4200/

Iniciar aplicacion de backend

- Ubicarse en el directorio src/backend/
- 'npm install' para instalar las dependencias necesarias
- 'npm start' para correr la aplicacion de frontend.
- Entrar por el navegador a http://localhost:3000/

### ¿Que hay que hacer?

Se desea realizar una comunicación entre el frontend y el backend, para esto vamos a crear un endpoint en el backend que devuelva un objeto en formato JSON con un número aleatorio generado automáticamente en cada petición.
El frontend deberá consumir dicho endpoint mediante el uso de HttpClient de Angular cuando hagas click en el botón "Cargar resultado" y mostrar el resultado en pantalla.

## Entregable

Se debe entregar un Pull Request con la solución del problema.

Feliz código!