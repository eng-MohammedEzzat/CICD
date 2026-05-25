const express=require("express")
const app=express()
const PORT=process.env.PORT || 3000

const healthController=require('./controller/health')

app.get("/",healthController.health)

app.get("/health",healthController.healthStatus)




app.listen(PORT,()=>{
    console.log(`server is listening in port ${PORT}`)
})

module.exports=app
