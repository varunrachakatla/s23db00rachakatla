var express = require('express');
var vehicle_controller = require('../controllers/vehicles');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET vehicles page. */
router.get('/', vehicle_controller.vehicle_view_all_Page );

/* GET detail vehicle page */
router.get('/detail', vehicle_controller.vehicle_view_one_Page);

/* GET create vehicle page */
router.get('/create',secured, vehicle_controller.vehicle_create_Page);

/* GET create update page */
router.get('/update',secured, vehicle_controller.vehicle_update_Page);

/* GET delete costume page */
router.get('/delete',secured, vehicle_controller.vehicle_delete_Page);

module.exports = router;
