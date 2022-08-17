const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const formData = require('./models/FormData');
const user = require('./models/User');
const colors = require('colors');

const app = express();
dotenv.config();
app.use(express.json());

app.use(cors());

connectDB();

app.get('/', (req, res)=>{
    res.send('app working properly');
});

app.post('/formSubmission', async (req, res) => {
    const {email, firstname, lastname, address} = req.body;
    const tempForm = new formData({email, firstname, lastname, address});
    try {
        await tempForm.save();
        res.status(201).json({message: 'Form Successfully Submitted'});
    }catch(error) {
        res.status(404).json({message: error.message});
    }
});

app.post('/userdetails', async(req, res)=>{
    const {email, firstname, lastname} = req.body;
    const User = new user({email, firstname, lastname});
    try {
        await User.save();
        res.status(201).json({message: 'User Successfully added'});
    }catch(error) {
        res.status(404).json({message: error.message});
    }
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`.cyan.underline.bold);
});