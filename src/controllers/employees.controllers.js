import { pool } from "../db.js"

//GET: obtener empleado
export const getEmployess = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from employee;')
        res.json(rows)
    } catch(error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}

export const getEmployee = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from employee where id = ?', [req.params.id])
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'Empleado no encontrado'
        })
    
        console.log(rows)
        res.json(rows[0])
    } catch(error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}

//POST: crear empleado
export const createEmployees = async (req, res) => {
    const { name, salary } = req.body
    try {
        const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES (?, ?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch(error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}

//DELETE: borrar empleado
export const deleteEmployess = async(req, res) => {
    try {
        const [result] = await pool.query('delete from employee where id = ?', [req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Empleado no encontrado'
        })

        res.sendStatus(204)
    } catch(error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}

//PUT: actualizar empleado
export const updateEmployees = async(req, res) => {
    const { id } = req.params
    const { name, salary } = req.body 

    try {
        const [result] = await pool.query('update employee set name = ifnull(?, name), salary = ifnull(?, salary) where id = ?', [name, salary, id])


        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Empleado no encontrado'
        })

        const [rows] = await pool.query('select * from employee where id = ?', [id])

        console.log(result)
        res.json(rows[0])
    } catch(error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}

