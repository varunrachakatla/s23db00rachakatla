var express = require('express');
var vehicle_controller = require('../controllers/vehicles');
var router = express.Router();

/* GET vehicles page. */
router.get('/', vehicle_controller.vehicle_view_all_Page );

/* GET detail vehicle page */
router.get('/detail', vehicle_controller.costume_view_one_Page);

module.exports = router;
