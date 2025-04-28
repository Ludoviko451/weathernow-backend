
# WeatherNow Backend ☁️
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Stable-brightgreen)


Backend simple desarrollado con Node.js y Express para obtener datos meteorológicos de una API externa.

Simple backend developed with Node.js and Express to fetch weather data from a third-party API.

## Características / Features

- Obtener el clima actual basado en la ubicación del usuario.  
  Fetch current weather based on user's location.
- Conectar con WeatherAPI usando una API Key.  
  Connect to WeatherAPI using an API Key.
- Diseñado para trabajar con el frontend de WeatherNow.  
  Designed to work together with the WeatherNow frontend.

## Tecnologías / Technologies

- Node.js
- Express
- dotenv (para variables de entorno / for environment variables)
- axios (para solicitudes HTTP / for HTTP requests)

## Instrucciones de configuración / Setup Instructions

### 1. Clonar el repositorio / Clone the repository


    git clone https://github.com/your-username/weathernow-backend.git

    cd weathernow-backend

### 2. Instalar las dependencias / Install dependencies

    npm install

### 3. Crear un archivo .env / Create a .env file
En la raíz del proyecto, crea un archivo llamado .env y agrega lo siguiente:
In the root of the project, create a file named .env and add the following:

    WEATHER_API_KEY= HERE

Reemplaza  con tu clave API real de WeatherAPI.
Replace  with your actual API key from WeatherAPI.

### 4. Correr el servidor / Run the server

    npm run dev

El servidor comenzará en http://localhost:3000.
The server will start at http://localhost:3000.

### Endpoints API / API Endpoints

| Método / Method | Endpoint           | Descripción / Description          |
|:----------------|:-------------------|:-----------------------------------|
| GET             | `/api/weather`         | Obtener el clima por IP/ubicación. / Fetch weather by IP/location |
