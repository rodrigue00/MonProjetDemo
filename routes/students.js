const express = require('express');
const router = express.Router();
const debug = require('debug')('monprojetdemo:api:student');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'monprojetdemo.ceefcjczct9j.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123',
  database: 'studentdb'
});

const studentList = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  debug("List students");
  connection.query(
    'SELECT * FROM `students`',
    (err, results, fields) => {
      if (err) {
        debug(err);
      } else {
        res.json(results);
      }
    }
  );
});

router.post('/', (req, res) => {
  debug("Create new student");
  const newStudent = req.body;
  connection.query(
    'INSERT INTO `students` (firstName, lastName) VALUES (?, ?)',
    [ newStudent.firstName, newStudent.lastName ],
    (err, results, fields) => {
      if (err) {
        debug(err);
      } else {
        res.status(201).send("Student created");
      }
    }
  );
});

router.get('/:id', (req, res) => {
  debug("Get student details");
  const studentId = req.params.id;
  connection.query(
    'SELECT * FROM `students` WHERE id = ?',
    [ studentId ],
    (err, results, fields) => {
      if (err) {
        debug(err);
      } else {
        if (results.length === 1) {
          res.json(results[0]);
        } else {
          res.status(404).send("Student not found");
        }
      }
    }
  );
});

module.exports = router;
