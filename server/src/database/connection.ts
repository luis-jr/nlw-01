import knex from 'knex';

const connection = knex({
    client: 'mysql',
    version: '5.7',
    connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'nlw1'
    },
    useNullAsDefault: true,
});

export default connection;

