module.exports = function(req, res) {
    var mongoose = require("mongoose");

    var DropPoint = mongoose.model("DropPoint");

    DropPoint.findOne({
          _id: req.params.id
      }, function(err, returnedDropPoint){
        if (err){
            res.json(err);
        } else {
            res.json(returnedDropPoint);
        }
    });
}
