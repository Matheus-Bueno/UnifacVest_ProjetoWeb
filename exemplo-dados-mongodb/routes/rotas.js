const express = require("express")

const RoutesController = require("./RoutesController")

const router = express.Router()

router.get("/", RoutesController.home)
router.get("/hi", RoutesController.hi)
router.get("/guest", RoutesController.guest)


module.exports = router