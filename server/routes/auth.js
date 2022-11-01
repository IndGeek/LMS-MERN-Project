import express from 'express'

const router = express.Router();

// controllers

import {register} from '../controllers/auth';

router.get('/register', register)

module.exports = router;