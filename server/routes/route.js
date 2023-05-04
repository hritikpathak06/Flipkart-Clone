const express = require('express')
const router = new express.Router()
const {userSignup, userLogin} = require("../controller/userController")
const { getProducts, getProductById } = require('../controller/productController')

router.post('/signup',userSignup)
router.post('/login',  userLogin)
router.get('/products', getProducts )
router.get('/product/:id', getProductById)



module.exports= router