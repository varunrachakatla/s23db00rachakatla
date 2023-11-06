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
exports.vehicle_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
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
exports.vehicle_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.vehicle_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
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
