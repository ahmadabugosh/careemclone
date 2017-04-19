const Driver = require('../models/driver');
module.exports = {

greeting(req, res)

{
res.send({hi:'there'});

},

create(req, res)

{
const driverProps = req.body;
Driver.create(driverProps)
.then(driver=> res.send(driver))
.catch(next);

},


edit(req, res, next)

{
const driverID =req.params.id;
const driverProps=req.body;
Driver.findByIdAndUpdate({_id: driverID}, driverProps)
.then((driver)=> Driver.findById({_id:driverID}))
.then(driver => res.send(driver))
.catch(next);

}



};