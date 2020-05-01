const { Client } = require('pg')

const client = new Client({
    // user: 'username',
    // password: 'password',
    host: 'localhost',
    database: 'spacestation',
    port: 5432
})

client.connect()

module.exports = {
    client
}