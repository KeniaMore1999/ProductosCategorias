import con from '../database/connection.js'

export const AgregarProductos = async (req, res) => {
    const { NombreProducto, Descripcion, Cantidad, Precio, Existencia } = req.body  
    const data = {
        NombreProducto: NombreProducto,
        Descripcion: Descripcion ,
        Cantidad: Cantidad,
        Precio: Precio,
        Existencia: Existencia
    }
    con.query('INSERT INTO productos SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }
        res.redirect('/AgregarProductos')
    })
}
export const ActualizarProductos = async (req, res) => {
    const {Idproducto = Idproducto} = req.body;
    const { NombreProducto, Descripcion, Cantidad, Precio, Existencia } = req.body  
    const data = {
        NombreProducto: NombreProducto,
        Descripcion: Descripcion ,
        Cantidad: Cantidad,
        Precio: Precio,
        Existencia: Existencia
    }
    con.query('UPDATE productos SET ? WHERE Idproducto = ?', [data, Idproducto], (err, result) => {
        if (err) {
            console.log('Ocurrio un error al actualizar el registro')
            return
        }
        res.redirect('/ActualizarProductos')
    })
}

export const EliminarProductos = async (req, res) => {
    const {Idproducto = Idproducto} = req.body;
    con.query('DELETE FROM productos WHERE Idproducto = ?', [Idproducto], (err, result) => {
        if (err) {
            console.log('Ocurrio un error al eliminar el registro')
            return
        }
        res.redirect('/EliminarProductos')
    })
}

export const AgregarCategorias = async (req, res) => {
    const { NombreCategoria, Descripcion, Area } = req.body  
    const data = {
        NombreCategoria: NombreCategoria,
        Descripcion: Descripcion ,
        Area: Area
    }
    con.query('INSERT INTO categorias SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }
        res.redirect('/AgregarCategorias')
    })
}

export const ActualizarCategorias = async (req, res) => {
    const {Idcategoria = Idcategoria} = req.body;
    const { NombreCategoria, Descripcion, Area } = req.body  
    const data = {
        NombreCategoria: NombreCategoria,
        Descripcion: Descripcion ,
        Area: Area
    }
    con.query('UPDATE categorias SET ? WHERE Idcategoria = ?', [data, Idcategoria], (err, result) => {
        if (err) {
            console.log('Ocurrio un error al actualizar el registro')
            return
        }
        res.redirect('/ActualizarCategorias')
    })
}

export const EliminarCategorias = async (req, res) => {
    const {Idcategoria = Idcategoria} = req.body;
    con.query('DELETE FROM categorias WHERE Idcategoria = ?', [Idcategoria], (err, result) => {
        if (err) {
            console.log('Ocurrio un error al eliminar el registro')
            return
        }
        res.redirect('/EliminarCategorias')
    })
}

export const logger = (req, res, next) => {
    console.log(req.path, req.method)
    next()
}