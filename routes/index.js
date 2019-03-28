'use strict'
const express = require('express')
const api = express.Router()
const ProductCtrl = require('../controllers/product')

api.get('/product/:productId', ProductCtrl.getProduct)
api.get('/product', ProductCtrl.getProducts)
api.post('/product', ProductCtrl.saveProduct)
api.put('/product/:productId', ProductCtrl.updateProduct)
api.delete('/product/:productId', ProductCtrl.deleteProduct)

module.exports = api