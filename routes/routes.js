import express from 'express'
import {AgregarProductos, ActualizarProductos, EliminarProductos, AgregarCategorias, ActualizarCategorias, EliminarCategorias} from '../controllers/Controller.js'
const router = express.Router()

router.get('/', (req, res) => { 
    res.render('index')
})

router.get('/categorias', (req, res) => {
    res.render('categorias')
})

router.get('/productos', (req, res) => {
    res.render('productos')
})

//----------------Productos-----------------------

router.get('/AgregarProductos', (req, res) => {
    res.render('AgregarProductos')
})

router.get('/ActualizarProductos', (req, res) => {
    res.render('ActualizarProductos')
})

router.get('/EliminarProductos', (req, res) => {
    res.render('EliminarProductos')
})

//--------------Categorias-----------------------


router.get('/AgregarCategorias', (req, res) => {
    res.render('AgregarCategorias')
})

router.get('/ActualizarCategorias', (req, res) => {
    res.render('ActualizarCategorias')
})

router.get('/EliminarCategorias', (req, res) => {
    res.render('EliminarCategorias')
})

router.post('/ActualizarProductos', ActualizarProductos)
router.post('/AgregarProductos', AgregarProductos)
router.post('/EliminarProductos', EliminarProductos)

router.post('/AgregarCategorias', AgregarCategorias)
router.post('/ActualizarCategorias', ActualizarCategorias)
router.post('/EliminarCategorias', EliminarCategorias)

export default router