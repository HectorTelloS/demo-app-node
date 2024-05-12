const express = require('express');
const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Prueba de aplicación de Node usando doker y jenkins')
})

app.listen(port, () => {
    console.log(`Servidor a la escucha del puerto  ${port}`)
})