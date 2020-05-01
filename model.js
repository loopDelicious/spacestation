const { Client } = require('pg')

const client = new Client({
    // user: 'username',
    // password: 'password',
    host: 'localhost',
    database: 'spacestation',
    port: 5432
})

client.connect()

const getTasks = (request, response) => {
    client.query('SELECT * FROM tasks ORDER BY id ASC', (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json(result.rows)
    })
}
const getTaskById = (request, response) => {
    const id = parseInt(request.params.id)
    client.query('SELECT * FROM tasks WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json(result.rows)
    })
}

const createTask = (request, response) => {
    const task = request.body.message
    client.query('INSERT INTO tasks (task) VALUES ($1) RETURNING *', [task], (error, result) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Task added: ID ${result.rows[0].id}`)
    })
}

const updateTask = (request, response) => {
    const id = parseInt(request.params.id)
    const task = request.body.message
    client.query('UPDATE tasks SET task = $1 WHERE id = $2 RETURNING *', [task, id], (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Task updated: ID ${result.rows[0].id}`)
    })
}

const deleteTask = (request, response) => {
    const id = parseInt(request.params.id)
    client.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id], (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Task deleted: ID ${result.rows[0].id}`)
    })
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}
