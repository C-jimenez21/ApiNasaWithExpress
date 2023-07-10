import express from 'express';
import dotenv from 'dotenv';
import table from './tabla.js'

const appExpress = express();
dotenv.config();

appExpress.get('/asteroids', async (req, res) => {
        try {
          //const today = "2023-07-10";
          const today = new Date().toISOString().split('T')[0];
          const endDate = new Date();
          endDate.setDate(endDate.getDate() + 1);
          const endDateFormatted = endDate.toISOString().split('T')[0];
          
          const apiKey = "kgMRAUPgFEv7rdBJc9Orcna9Y5qOeQ72eR5QgcB4";
          const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${endDateFormatted}&api_key=${apiKey}`;
            //const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-07-10&end_date=2023-07-11&api_key=DEMO_KEY`

          const response = await fetch(url);
          const data = await response.json();
          
          // Obtenemos los asteroides más cercanos a la Tierra
          const asteroids = data.near_earth_objects[today];
          //console.log(asteroids);
       
          // Creamos una lista con la información relevante de cada asteroide
          const asteroidList = asteroids.map(asteroid => ({
            Nombre: asteroid.name,
            Volumen: asteroid.estimated_diameter.kilometers.estimated_diameter_min,
            Velocidad: asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour,
            fechaAproximacion: asteroid.close_approach_data[0].close_approach_date,
            Peligro: asteroid.is_potentially_hazardous_asteroid,
            Orbita: asteroid.close_approach_data[0].orbiting_body
          }));

         let html = table(asteroidList); 
          console.table(asteroidList);
          res.status(201).send(html);
          
        } catch (error) {
            console.log(error);
            res.status(500)
        }
});


let config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`Server is running on port ${config.hostname}:${config.port}`);
})