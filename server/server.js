import express from 'express'
import cors from 'cors'
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// middleWares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// route
app.get('/', (req, res)=>{
    res.send('ok get');
})

// port
const port = process.env.PORT || 8000;

app.listen(port, ()=> console.log(`listening to backend at port http://localhost:${port}`))