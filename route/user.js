const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/user", userController.index);

//untuk ambil data berdasarkan id
router.get("/user/:id", userController.show);

router.post("/user", userController.store);

router.put("/user/:id", userController.update);

router.delete("/user/:id", userController.delete);

module.exports = router;
