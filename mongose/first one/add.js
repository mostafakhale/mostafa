//const fs=require('fs');
//const name= "mostafa" ;
//fs.writeFileSync('first.txt',name);
const http=require('http');
const route=require('./route')
const express=require('express')
const bodyparser=require('body-parser')
const app = express();
const path=require('path');
const expresshbs= require("express-handlebars");
app.engine("hbs",expresshbs());
app.set('view engine','hbs');
app.set('view ','views');


const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));
app.use(adminroutes.router);
app.use(shoproutes);








const server=http.createServer(app)
//console.log(server.message);
server.listen(3000);
