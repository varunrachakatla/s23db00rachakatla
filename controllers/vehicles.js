const vehicles = require("../models/vehicles");
var Vehicles = require("../models/vehicles");
// List of all Costumes
exports.vehicle_list = async function (req, res) {
    try {
        theVehicles = await Vehicles.find();
        res.send(theVehicles);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Costume.
exports.vehicle_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Vehicles.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Costume create on POST.
exports.vehicle_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Vehicles();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.vehicle_type = req.body.vehicle_type;
    document.color = req.body.color;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete form on DELETE.
exports.vehicle_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Vehicles.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Costume update form on PUT.
exports.vehicle_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Vehicles.findById(req.params.id)
        // Do updates of properties
        if (req.body.vehicle_type)
            toUpdate.vehicle_type = req.body.vehicle_type;
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};

// VIEWS
// Handle a show all view
exports.vehicle_view_all_Page = async function (req, res) {
    try {
        theVehicles = await Vehicles.find();
        res.render('vehicles', { title: 'Vehicle Search Results', results: theVehicles });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle a show one view with id specified by query
exports.vehicle_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Vehicles.findById(req.query.id)
        res.render('vehicledetail',
            { title: 'Vehicle Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a vehicle.
// No body, no in path parameter, no query.
// Does not need to be async
exports.vehicle_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('vehiclecreate', { title: 'Vehicle Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.vehicle_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Vehicles.findById(req.query.id)
        res.render('vehicleupdate', { title: 'Vehicle Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle a delete one view with id from query
exports.vehicle_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Vehicles.findById(req.query.id)
        res.render('vehicledelete', {
            title: 'Vehicle Delete', toShow: result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
    
