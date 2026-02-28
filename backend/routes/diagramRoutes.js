const express = require("express");
const router = express.Router();
const {
  getDiagrams,
  createDiagram,
  saveDiagram,
  deleteDiagram,
  getSingleDiagram,
} = require("../controller/diagramController.js");
const {
  validateClerkUser,
  addUserToRequest,
} = require("../middleware/clerkAuth.js");

// Apply Clerk authentication to all routes
router.use(validateClerkUser);

// CRUD Routes for diagrams
router.get("/", getDiagrams); // GET /api/diagrams - Get all user diagrams
router.post("/", createDiagram); // POST /api/diagrams - Create new diagram
router.get("/:id", getSingleDiagram); // GET /api/diagrams/:id - Get single diagram
router.put("/:id", saveDiagram); // PUT /api/diagrams/:id - Update diagram
router.delete("/:id", deleteDiagram); // DELETE /api/diagrams/:id - Delete diagram

module.exports = router;
