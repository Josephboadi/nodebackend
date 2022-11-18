const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
router.get("/logs", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "logs", "reqLog.txt"));
  return;
});

module.exports = router;
