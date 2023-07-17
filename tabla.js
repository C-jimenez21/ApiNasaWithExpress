export default function table(asteroidList){

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
            <div class="display-5 my-5">ASTEROIDES CERCANOS A LA TIERRA</div>
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Volumen</th>
                        <th scope="col">Velocidad</th>
                        <th scope="col">Fecha de aproximacion</th>
                        <th scope="col">Peligro</th>
                        <th scope="col">Orbta</th>
                      </tr>
                    </thead>
                    <tbody>
                            ${asteroidList.map((asteroid, index) => `
                              <tr >
                                <td>${index}</td>
                                <td>${asteroid.Nombre}</td>
                                <td>${asteroid.Volumen}</td>
                                <td>${asteroid.Velocidad}</td>
                                <td>${asteroid.fechaAproximacion}</td>
                                <td>${asteroid.Peligro}</td>
                                <td>${asteroid.Orbita}</td>
                              </tr>
                            `).join('')}
             
                        
                    </tbody>
                  </table>

                </div>
            </div>
        </div>
    </div>
</body>
</html>`};