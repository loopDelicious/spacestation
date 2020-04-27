const { Client } = require('pg');

const client = new Client({
    // user: 'username',
    // password: 'password',
    host: 'localhost',
    database: 'spacestation',
    port: 5432
})

client.connect()

const getTasks = (request, response) => {
    client.query('SELECT * FROM tasks ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


module.exports = {
    getTasks
    // getTaskById,
    // createTask,
    // updateTask,
    // deleteTask,
}
