const express = require('express')
const products = require('../products.json')
const app = express()
const port = 3001
const ctrl = require('../server/getProducts')
const getProduct = require('../server/getProduct')


app.get('/api/products', ctrl.getProducts)
// app.get('/api/products/:id', getProduct)



app.listen(port, ()=>{ 
    console.log(`listening to port ${port}`)
})