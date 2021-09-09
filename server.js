const app = require('./src/app')
function connect(){
  try{
    app.listen (8000, ()=> console.log('Server running...'))
  }  
  catch(err){ 
        console.log(err)
        setTimeout(connect, 2000)
      }
}
connect()
