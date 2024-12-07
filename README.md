# Backend de Aplicación CRUD  

Este es el repositorio del backend para la aplicación CRUD de gestión de libros. Proporciona una API REST que permite realizar operaciones básicas de creación, lectura, actualización y eliminación (CRUD) sobre una base de datos PostgreSQL.

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) (gestor de paquetes)
- [PostgreSQL](https://www.postgresql.org/) (para gestionar la base de datos)

## 🚀 Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Arthurx7/backend-repo/

2. Navega al directorio del proyecto:

   ```bash
   cd backend-repo

3. Instala las dependencias necesarias:

   ```bash
   npm install

## ⚙️ Configuración

1. Configura una base de datos PostgreSQL y asegúrate de crear una tabla llamada libros con la siguiente estructura:
   
   ```bash
   CREATE TABLE libros (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
    );

2. Edita las credenciales de la base de datos en el archivo index.js para que coincidan con las configuraciones de tu entorno PostgreSQL:

   ```bash
   const pool = new Pool({
    user: "tu_usuario",
    host: "localhost",
    database: "tu_base_de_datos",
    password: "tu_contraseña",
    port: 5432,
    });

## ▶️ Ejecución
1. Inicia el servidor de desarrollo con el siguiente comando:

   ```bash
   npm start

2. El servidor estará disponible en http://localhost:3001. La API REST expone las siguientes rutas:
   - GET /libros - Obtener todos los libros.
   - POST /libros - Crear un nuevo libro.
   - PUT /libros/:id - Actualizar un libro existente.
   - DELETE /libros/:id - Eliminar un libro.

## 🛑 Tecnologías utilizadas

Express.js: Framework web para construir la API REST.
PostgreSQL: Base de datos relacional.
Node.js: Entorno de ejecución para JavaScript en el backend.

