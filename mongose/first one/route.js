const fs=require('fs');

    const reqHandelr=(req,res)=>{
   // console.log(req.url,req.method,req.headers);
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        //res.setHeader('content-type','text/html');
        res.write(` <html> <head> </head> 
                     <body>
          <form action='/message' method='POST'><input type='text' name='message'> <button type='submit'>enter</button> </input></form>
          </body>
          </html>`
        );
        return res.end();

     
    }
    if(url==='/message' && method ==="POST"){
        const body=[];
        req.on('data', chunk =>{
            console.log(chunk);
            body.push(chunk); 
        })
        return req.on('end',()=>{
            const parsBody = Buffer.concat(body).toString();
            const message=parsBody.split('=')[1];
            fs.writeFile('message.text',message,err=>{
                res.statusCode = 302;
                res.setHeader('location','/');
                return res.end();
            });
        });
    }
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>hello to this zone </h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    
};
module.exports.handeler=reqHandelr;
module.exports.message='who are u  us';

