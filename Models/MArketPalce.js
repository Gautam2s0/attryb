const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  model:{type:String,require:true},
  year :{type:Number,require:true},
  dealer :{type:String,require:true},
  kmOdometer:{type:Number,require:true},
  majorScratches:{type:Boolean,require:true},
  originalPaint:{type:Boolean,require:true},
  accidentsReported:{type:Boolean,require:true},
  previousBuyers :{type:Number,require:true},
  registrationPlace :{type:String,require:true}
});


const MarketplaceInventoryModel=mongoose.model('MarketplaceInventory', InventorySchema);

module.exports = {
    MarketplaceInventoryModel
}
