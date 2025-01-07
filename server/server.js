const express = require('express');
const mongoose = require('mongoose');
const cookieParser =require('cookie-parser');
const cors =require('cors');
const productrouter = require("./routes/ProductRoute");

mongoose.connect('mongodb+srv://team2025:ctXHdgPgHbthyrL7@cluster0.4ujep.mongodb.net/'

).then(()=> console.log("MongoDB Connected"))
 .catch(()=>console.log(error));


const app = express();
app.use(express.json());
app.use("/products", productrouter);
const PORT = process.env.PORT || 5000;


app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET','POST','DELETE','PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma' 
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, ()=>console.log(`Server is now running on port ${PORT}`));
