const express = require("express");
const router = express.Router();
const { getDetails, addDetails, updateDetails, deleteDetails, getCount } = require("../../controllers/Placement/details.controller.js");
const upload = require("../../middlewares/multer.middleware.js");

/**
 * @swagger
 * /api/placement/details/getDetails:
 *   post:
 *     summary: Retrieve placement details
 *     tags: [Placement Details]
 *     responses:
 *       200:
 *         description: Successfully retrieved placement details
 *       500:
 *         description: Server error
 */
router.post("/getDetails", getDetails);

/**
 * @swagger
 * /api/placement/details/addDetails:
 *   post:
 *     summary: Add new placement details
 *     tags: [Placement Details]
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
 *                 description: Profile picture of the placement detail
 *               name:
 *                 type: string
 *                 description: Name of the person
 *               email:
 *                 type: string
 *                 description: Email of the person
 *     responses:
 *       201:
 *         description: Successfully added placement details
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Server error
 */
router.post("/addDetails", upload.single("profile"), addDetails);

/**
 * @swagger
 * /api/placement/details/updateDetails/{id}:
 *   put:
 *     summary: Update placement details
 *     tags: [Placement Details]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the detail to update
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
 *         description: Successfully updated placement details
 *       404:
 *         description: Detail not found
 *       500:
 *         description: Server error
 */
router.put("/updateDetails/:id", upload.single("profile"), updateDetails);

/**
 * @swagger
 * /api/placement/details/deleteDetails/{id}:
 *   delete:
 *     summary: Delete placement details
 *     tags: [Placement Details]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the detail to delete
 *     responses:
 *       200:
 *         description: Successfully deleted placement details
 *       404:
 *         description: Detail not found
 *       500:
 *         description: Server error
 */
router.delete("/deleteDetails/:id", deleteDetails);

/**
 * @swagger
 * /api/placement/details/count:
 *   get:
 *     summary: Get the count of placement details
 *     tags: [Placement Details]
 *     responses:
 *       200:
 *         description: Successfully retrieved count
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   description: Number of placement details
 *       500:
 *         description: Server error
 */
router.get("/count", getCount);

module.exports = router;
