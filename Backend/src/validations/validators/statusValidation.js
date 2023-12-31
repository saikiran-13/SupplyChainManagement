const schema = require('../schemas/verifySchema')
function statusValidation (req,res,next){
    const {error,value} = schema.validate(req.body,{abortEarly:false})
    if(error){
        res.status(404).json({error:error.message})
    }
    else{
        console.log(value)
        // res.send("Product Validation Successfull")
        next()
    }
}
module.exports = statusValidation