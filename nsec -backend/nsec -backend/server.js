const http = require('http');
const PORT = 5500;
const server = http.createServer((req, res) => {
    const url = req.url;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (url === '/') {
        res.end(
            `
            <h1>API+ Routing</h1>
            <ul>
            <li><a href="/">Home page</a></li>
             <li><a href="/emp-salary">Employee Salary</a></li>
                <li><a href="/check">Price Check</a></li>   
                <li><a href="/map">Product List</a></li>
                <li><a href="/order">Order Details</a></li>
            </ul>
            `
        )
    }

    //emp salary calculation
    else if (url === '/emp-salary') {
        const basic = 10000;
        const hra = 5000;
        const bonus = 3000;
        const totalSalary = basic + hra + bonus;
        res.end(
            `
            <h1>Employee Salary</h1>
            <p>Basic Salary: ${basic}</p>
            <p>HRA: ${hra}</p>
            <p>Bonus: ${bonus}</p>
            <p>Total Salary: ${totalSalary}</p>
            `
        )
    }
    //check system
    else if (url === '/check') {
        const price = 100;
        const result = price > 50 ? 'Expensive' : 'Affordable';
        res.end(
            `
            <h1>Price Check</h1>
            <p>Price: ${price}</p>
            <p>Result: ${result}</p>
            `
        )
    }
    //mapping
    else if (url === '/map') {
        const products = [
            { name: 'laptop', price: 100000 },
            { name: 'watch', price: 2000 },];
            const productList = products.map(product => `<li>${product.name} = ${product.price}</li>`);
        res.end(
            `
            <h1>Product List</h1>
            <ul>
                ${productList}
            </ul>
            `
        )
    }
    //order details fetch async
        else if (url === '/order') {  
       const getOrderDetails = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ orderId: 123, product: 'laptop', price: 100000 });
                }, 2000);
            });

            
        };
       const fetchOrderDetails = async () => {
            const orderDetails = await getOrderDetails();
            res.end(
                `
                <h1>Order Details</h1>
                <p>Order ID: ${orderDetails.orderId}</p>
                <p>Product: ${orderDetails.product}</p>
                <p>Price: ${orderDetails.price}</p>
                `
            );
        };
        fetchOrderDetails();
    }

});
server.listen(PORT, () => {
    console.log(`Server is running on 5500`);
});
