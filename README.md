# Actividad Evaluacion 2
Aqui voy a documentar mis versiones de mi proyecto para la evaluacion numero 2 de Programacion Web
# Actividad 2.6: Web Scraping con Cheerio - Programación Web

## 1. Objetivo
El objetivo de esta actividad es desarrollar una aplicación de backend utilizando **Node.js** y **Express** capaz de procesar HTML externo mediante la librería **Cheerio**. Se implementó una arquitectura profesional por capas (Routes, Controllers, Services) para extraer información estructurada y servirla a través de un endpoint API en formato JSON.

## 2. Instalación
Siga estos pasos para configurar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone [PEGAR_AQUÍ_EL_LINK_DE_TU_REPOSITORIO]
Navegar a la carpeta del proyecto
Instalar dependencias:
npm install express axios cheerio
## 3. Ejecución Para iniciar el servidor, ejecute el siguiente comando en la terminal:
node app.js
El servidor estará disponible en: http://localhost:3000.
## 4. Estructura del Proyecto
El proyecto se organiza bajo una arquitectura de separación de responsabilidades:

routes/: Define los puntos de acceso (endpoints) de la API.

controllers/: Gestiona el flujo de las peticiones y respuestas HTTP.

services/: Contiene la lógica y scraping con Cheerio.

app.js: Archivo principal que inicializa el servidor Express.
## 5. Endpoints
Método	Endpoint	Descripción
GET	/	Página de bienvenida y estado del sistema.
GET	/api/scrape	Procesa el sitio web y retorna la lista de libros extraídos.
## 6. Ejemplo de Respuesta (JSON)
Al consultar http://localhost:3000/api/scrape, el sistema devuelve:
{
  "status": "success",
  "count": 20,
  "data": [
    {
      "titulo": "A Light in the Attic",
      "precio": "£51.77",
      "disponibilidad": "In stock"
    },
    {
      "titulo": "Tipping the Velvet",
      "precio": "£53.74",
      "disponibilidad": "In stock"
    }
  ]
}
