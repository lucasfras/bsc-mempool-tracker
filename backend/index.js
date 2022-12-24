import express from "express";

import viewMempool from "./viewMempool.js";

const app = express()

app.get('/', (req, res) => {
    viewMempool().then((result) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        res.type('json')
        res.send(result)
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})