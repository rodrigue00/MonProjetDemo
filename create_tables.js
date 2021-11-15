const debug = require('debug')('monprojetdemo:create_database');
const connection = require('./db_connect');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'studentdb'
});
connection.query(
    'create table students (id int auto_increment primary key, firstName varchar(100), lastName varchar(100))',
    function(err, results, fields) {
      debug(err);
      debug(results); // results contains rows returned by server
      connection.close();
    }
);
