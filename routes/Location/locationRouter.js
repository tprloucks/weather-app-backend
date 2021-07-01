var express = require('express')
var router = express.Router()

let{
    createLocation,
    getAllLocation,
    deleteLocation

}= require("./controller/LocationController")
router.get('/', function(req, res, next) {
    res.send('Weather path hit!');
});

router.post('/create-location', createLocation)
router.get('/get-all-location', getAllLocation)
router.delete('/delete-by-id/:id',deleteLocation )

module.exports= router