import app from './src/app.js';
import connect from './src/config/config.js'





connect();


app.listen(3000 ,()=>
{
    console.log("app is running");

})