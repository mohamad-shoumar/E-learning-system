const { authMiddleware } = require("../middlewares/auth.middleware");
const { adminMiddleware } = require("../middlewares/admin.middleware");
const { Router } = require("express");
const {
  getAllfiles,
  dropcourse,
  enrollCourse,
} = require("../controllers/student.controllers");

const router = Router();
// router.get("/", getAllfiles);
router.post("/dropcourse", dropcourse);
router.post("/course", enrollCourse);

module.exports = router;
