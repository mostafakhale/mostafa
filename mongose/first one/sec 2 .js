const fs=require('fs');
const name= "mostafa" ;
fs.writeFileSync('first.txt',name);
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>hello node js </h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

     
    }
    

});
server.listen(3000);
