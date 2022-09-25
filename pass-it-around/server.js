const express = require('express');

const app = express();

const port = 3000;




let bottles = "bottles"
let bottle = "bottle"


app.get('/', (req, res) => {
    res.send(`<h1> 99 ${bottles} of beer on the wall <a href ="/98">take one down, pass it around</a></h1>`)
})

app.get('/:number_of_bottles', (req,res) =>{
   let count = req.params.number_of_bottles
   if(count == 1){
      bottles = bottle

      }else if(count == 0){
      res.send('<h1> There are no more bottles, <a href ="/">home</a></h1>')
      return
   }
    res.send(`<h1>${count} ${bottles} of beer on the wall <a href ="/${count - 1}">take one down, pass it around </a></h1>`)
})









app.listen(port, function(){
    console.log('Now Listening on Port:', port)
})





