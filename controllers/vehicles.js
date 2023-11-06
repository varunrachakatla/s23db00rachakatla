var Vehicles = require("../models/vehicles");
// List of all Costumes
exports.vehicle_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume list');
};
// for a specific Costume.
exports.vehicle_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.vehicle_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle Costume delete form on DELETE.
exports.vehicle_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.vehicle_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
