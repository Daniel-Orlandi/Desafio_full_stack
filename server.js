const app = require('./src/app')
function connect(){
  try{
   const server = app.listen (8000, ()=> console.log(`Server running on port ${server.address().port}`))
  }  
  catch(err){ 
        console.log(err)
        setTimeout(connect, 2000)
      }
}
connect()
