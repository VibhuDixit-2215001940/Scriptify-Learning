var express = require('express');
var app = express();
console.log(app.use)

app.listen(8000,()=>{
    console.log('Server started at port 8000')
})