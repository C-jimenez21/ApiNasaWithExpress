# NASA -API

Este proyecto consiste en crear un servidor HTTP que escuche en el puerto 3000 y una API que devuelve una lista de los asteroides más cercanos a la Tierra en las próximas 24 horas. La lista incluirá información como el nombre del asteroide, su tamaño, velocidad y fecha de aproximación.

## API Usage

### Obtener lista de asteroides cercanos a la Tierra

Endpoint: `GET /asteroids`

Este endpoint devuelve una lista de los asteroides más cercanos a la Tierra en las próximas 24 horas.

## Instrucciones de instalación y ejecución

1. Asegúrate de tener Node.js y npm instalados en tu máquina.

2. Clona este repositorio o descárgalo como un archivo ZIP.

   `git clone https://github.com/C-jimenez21/NASA-API`

3. Instala las dependencias del proyecto: `npm install`

4. Crea el archivo .env y escribe

   ​	`MY_CONFIG={"hostname":"127.0.0.1","port":3000}`

5. Inicia el servidor: `npm dev`

6. El servidor estará escuchando en el puerto 3000. Puedes acceder a la API en `http://127.0.0.1:3000/asteroids`.

¡Listo! Ahora tienes un servidor HTTP con una API que devuelve información sobre los asteroides cercanos a la Tierra y una página web para visualizar la lista de manera atractiva.

## Recursos adicionales

- [Documentación de la NASA API](https://api.nasa.gov/): Puedes consultar la documentación oficial de la NASA API para obtener más información sobre los endpoints y los datos disponibles.
- [Documentación de Express](https://expressjs.com/): La documentación oficial de Express proporciona información detallada sobre cómo utilizar el framework para crear aplicaciones web en Node.js.

¡Disfruta del ejercicio y explora el fascinante mundo de la NASA API! Si tienes alguna pregunta, no dudes en contactarme.