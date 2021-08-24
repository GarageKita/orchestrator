if (process.env.NODE_ENV != 'production') require('dotenv').config();

const express = require('express')
const app = express()
const routes = require('./routes') 
const errorHandler = require('./middlewares/errorHandler');  
const PORT = process.env.PORT || 3000
const cors = require('cors')

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', routes)
app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).json({message: 'Test Connection'})
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})

