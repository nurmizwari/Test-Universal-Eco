const Controller = require("../controller/user");

const router = require("express").Router();

router.get("/", Controller.getData);
router.get("/:user_id", Controller.getDataById);
router.patch("/:user_id", Controller.UpdateById);

module.exports = router;
