const Location = require("../model/Location")
/* GET home page. */

async function createLocation(req, res) {
  try {
    let createdLocation = new Location({
      city: req.body.city,
      country: req.body.country,
    });
    let savedLocation = await createdLocation.save();
    res.json({
      payload: savedLocation,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
async function getAllLocation(req, res){
    try{
        let foundAllLocation = await Location.find({})
        res.json({message:"success", payload:foundAllLocation})
    }catch (e){
        res.status(500).json({message:"failure", error:e.message})
    }
}

async function deleteLocation(req, res){
    const id = req.params.id;
    try {
        let deletedLocation = await Location.findByIdAndRemove({ _id: id });
        res.json({ message: "success", payload: deletedLocation });
    } catch (e) {
        res.status(500).json({ message: "failure", error: e.message });
    }
}

module.exports = {
    createLocation,
    getAllLocation,
    deleteLocation
};