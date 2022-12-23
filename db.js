const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Gusht1997",
    database: "todo-database",
    host: "localhost",
    port: 5432

});

module.exports = pool;