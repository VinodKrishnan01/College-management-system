const express = require("express");
const router = express.Router();
const { 
  getDetails, 
  addDetails, 
  updateDetails, 
  deleteDetails, 
  getCount, 
  getStudentsBySkill 
} = require("../../controllers/Student/details.controller.js");
const upload = require("../../middlewares/multer.middleware.js");

/**
 * @swagger
 * /api/student/details/getDetails:
 *   post:
 *     summary: Retrieve details of students
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: Successfully retrieved student details
 *       500:
 *         description: Server error
 */
router.post("/getDetails", getDetails);

/**
 * @swagger
 * /api/student/details/addDetails:
 *   post:
 *     summary: Add new student details
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               profile:
 *                 type: string
 *                 format: binary
 *                 description: Profile picture of the student
 *               name:
 *                 type: string
 *                 description: Name of the student
 *               email:
 *                 type: string
 *                 description: Email of the student
 *     responses:
 *       201:
 *         description: Successfully added student details
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Server error
 */
router.post("/addDetails", upload.single("profile"), addDetails);

/**
 * @swagger
 * /api/student/details/updateDetails/{id}:
 *   put:
 *     summary: Update student details
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the student to update
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               profile:
 *                 type: string
 *                 format: binary
 *                 description: Updated profile picture
 *               name:
 *                 type: string
 *                 description: Updated name
 *               email:
 *                 type: string
 *                 description: Updated email
 *     responses:
 *       200:
 *         description: Successfully updated student details
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.put("/updateDetails/:id", upload.single("profile"), updateDetails);

/**
 * @swagger
 * /api/student/details/deleteDetails/{id}:
 *   delete:
 *     summary: Delete student details
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the student to delete
 *     responses:
 *       200:
 *         description: Successfully deleted student details
 *       404:
 *         description: Student not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteDetails/:id", deleteDetails);

/**
 * @swagger
 * /api/student/details/count:
 *   get:
 *     summary: Get the total count of students
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: Successfully retrieved student count
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   description: Total number of students
 *       500:
 *         description: Server error
 */
router.get("/count", getCount);

/**
 * @swagger
 * /api/student/details/by-skill:
 *   get:
 *     summary: Get students by skill
 *     tags: [Student]
 *     parameters:
 *       - in: query
 *         name: skill
 *         required: true
 *         schema:
 *           type: string
 *         description: Skill to filter students by (e.g., JavaScript)
 *     responses:
 *       200:
 *         description: List of students with the specified skill
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 students:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Student'
 *       400:
 *         description: Skill parameter missing
 *       500:
 *         description: Server error
 */
router.get("/by-skill", getStudentsBySkill);

module.exports = router;
