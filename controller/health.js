

const health=(req,res,next)=>{
    res.send("hello in our app in health ")
}

const healthStatus=(req,res,next)=>{
    res.json({"status":"ok"})
}

module.exports={
    health,
    healthStatus
}