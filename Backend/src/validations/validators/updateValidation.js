const schema = require('../schemas/updateSchema')
function updateValidation (req,res,next){
    const {error,value} = schema.validate(req.body,{abortEarly:false})
    if(error){
        res.status(404).json({error:error.message})
    }
    else{
        console.log(value)
        next()
    }
}
module.exports = updateValidation