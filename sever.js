const http = require('http')


const server = http.createServer(function(request,response){
    console.log(request.method);
    if(request.method=== 'POST' && request.url === '/toDOTask'){
        response.end('You just made a POST to add a task')
            
    }else if (request.method === 'GET' && request.url === '/toDOTask' ){
        response.end ('You just made a GET to veiw all task')
    }else if (request.method === 'PUT' && request.url === '/toDOTask'){
        response.end('You just made a PUT to update the task')
    }else if (request.method === 'DELET' && request.url === '/toDOTask'){
        response.end ('You just made a DELET to delet a task')
    }else{
            response.end('error')
    }
 
});

server.listen(5050, function(){
    console.log('server has started to run');

});