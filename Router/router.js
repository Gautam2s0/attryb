const express = require("express");
const router = express.Router();
const {OEM_SpecsModel} = require("../Models/OEM_Specs");
const { MarketplaceInventoryModel } = require("../Models/MArketPalce");

// OEM specs models searching
router.get("/oem", async (req, res) => {
  const query = {};
  if (req.query.model) {
    query.model = req.query.model;
  }
  if (req.query.year) {
    query.model = req.query.year;
  }

  if (req.query.price) {
    query.model = req.query.price;
  }
  if (req.query.milage) {
    query.model = req.query.milage;
  }

  try {
    const specs = await OEM_SpecsModel.find(query);
    res.status(200).send(specs);
  } catch (error) {
    console.error("Error searching OEM specs:", error);
    res.status(500).send({ error });
  }
});

// Inventory 
router.get("/in", async (req, res) => {
    try {
     
      res.json("inventory");
    } catch (error) {
      console.error("Error fetching inventory:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
  


router.get("/inventory", async (req, res) => {
  try {
    const inventory = await MarketplaceInventoryModel.find();
    res.json(inventory);
  } catch (error) {
    console.error("Error fetching inventory:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/inventory/create", async (req, res) => {
    // console.log(req.body)
  try {
    const inv = new MarketplaceInventoryModel(req.body);
    await inv.save();
    console.log(inv)
    res.status(200).send(inv);
  } catch (error) {
    console.log('err',error)
    res.status(500).send(error);
  }
})

module.exports = {router};




// {
//     "model": "honda suv 2015",
//     "year": 2015,
//     "dealer": "64670e9252acb690492c74df",
//     "kmOdometer": 10,
//     "majorScratches":true,
//     "originalPaint":false,
//     "accidentsReported":false,
//     "previousBuyers":2,
//     "registrationPlace":"rto"
    
    
//     }