const { Client } = require('pg')

const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE || 'spacestation'
    // user: 'username',
    // password: 'password'
})

// connect the db
client.connect(err => {
    if (err) {
        console.error('Connection error', err.stack)
    } else {
        console.log('Connected to the db')
    }
})

// create table if none exists
const createTableText =
    `CREATE TABLE IF NOT EXISTS
        tasks (
            ID SERIAL PRIMARY KEY,
            task VARCHAR(60) NOT NULL,
            done BOOLEAN DEFAULT false
        )`
client.query(createTableText, (err, res) => {
    if (err) throw err
    console.log(res)
})

module.exports = {
    client
}