import express from "express"

const server = express()

try {
    server.use(express.static('public', {extensions: ['html']}));
    server.use('*', (req, res) => {
        res.status(404).send("Error 404")
    })
} catch (error) {
    server.use("*", (req, res) => {
        res.status(500).send("Error 500")
    })
}

server.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"))