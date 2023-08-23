const mongoose=require("mongoose");

const OEMschema=mongoose.Schema({
    model:{type:String,require:true},
    year:{type:String,require:true},
    price:{type:Number,require:true},
    color:{type:[String],require:true},
    milage:{type:Number,require:true},
    power:{type :Number,require:true},
    maxSpeed:{type:Number,require:true}
})

const OEM_SpecsModel=mongoose.model("OEM_SPECS",OEMschema)

module.exports={
    OEM_SpecsModel
}