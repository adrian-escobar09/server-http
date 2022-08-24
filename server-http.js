

    const http = require('http');
    
    const fs = require('fs')
    
    const host = 'localhost';
    
    const port = 3000;
    
const server = http.createServer((req, res) => {
        
        res.writeHead(200, {'Content-Type' : 'text/html'})
        
        fs.readFile('Aqui el archivo principal', (error, data) => {
            
            if(error){
                
                res.writeHead(404);
                res.write("Error 404 - Archivo no encontrado")
                
            }else {
                
                res.write(data);
                
            }
            
            res.end();
            
        })
        
    })
    
    server.listen(port, host, () => {
        
        console.log("Servidor corriendo en el puerto " + port);
        
    })