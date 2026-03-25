//server create

const express = require('express');
const app = express();
app.use(express.json());

//middleware use
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
app.use(logger);

// basic route +multiple route
app.get('/', (req, res) => {
    res.send("backend is running");
});
app.get('/home', (req, res) => {
    res.send("home page");
});
app.get('/about', (req, res) => {
    res.json({
        id: 1,
        name: "subhojit",
        course: "mern stack"
    });
});
//how do you use route parameter

app.get('/api/user/:id', (req, res) => {
    const userid = req.params.id;
    res.send(`userid: ${userid}`);
});
//how do you handel query parameters

app.get('/api/search', (req, res) => {
    const name = req.query.name;
    res.send(`searching: ${name}`);
});
//data insert
app.post('/api/product', (req, res) => {
    const products = req.body;
    res.json({ message: "product added", data: products })
});

//crud api
const products = [
    { id: 1, name: "laptop" },
    { id: 2, name: "watch" },

];
//view all
app.get("/api/products",(req,res)=>{
    res.json(products);
});
//singel view
app.get("/api/products/:id",(req,res)=>{
    const product = products.find(x => x.id  == req.params.id);
    res.json(product);
});
//create
app.post("/api/products",(req,res)=>{
    const newproduct = {
        id:products.length +1,
        name:req.body.name
    };
    products.push(newproduct);
    res.json(newproduct);
});

const port = 5600;
app.listen(port, () => {
    console.log("server is running port 5660");
});
