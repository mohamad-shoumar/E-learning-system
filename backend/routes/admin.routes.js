const { authMiddleware } = require("../middlewares/auth.middleware");
const { adminMiddleware } = require("../middlewares/admin.middleware");
const { Router } = require("express");
const {
  getAllstudents,
  handledropRequest,
  getrequests,
  creatCourse,
} = require("../controllers/admin.controllers");

const router = Router();
router.get("/studentlist", getAllstudents);
router.get("/adminrequest", getrequests);
router.post("/droprequest", handledropRequest);
// router.post("/", uploadFile);
router.post("/course", creatCourse);

module.exports = router;
