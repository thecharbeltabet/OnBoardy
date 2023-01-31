const {createStudent, getStudents, getStudent, updateStudent, deleteStudent} = require('../controllers/student');

const express = require('express');

const router = express.Router();

// GET all students
router.get('/student', getStudents);

// GET one student
router.get('/student/:id', getStudent);

// POST one staff
router.post('/student', createStudent);

// update one staff
router.put('/student/:id', updateStudent);

// delete one staff
router.delete('/student/:id', deleteStudent);

module.exports = router;

