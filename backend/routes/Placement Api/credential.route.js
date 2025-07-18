const express = require("express");
const { loginHandler, registerHandler, updateHandler, deleteHandler } = require("../../controllers/Placement/credential.controller.js");
const router = express.Router();

/**
 * @swagger
 * /api/placement/credential/login:
 *   post:
 *     summary: Handle login for placement credentials
 *     tags: [Placement Credential]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: User's username
 *               password:
 *                 type: string
 *                 description: User's password
 *     responses:
 *       200:
 *         description: Successfully logged in
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
router.post("/login", loginHandler);

/**
 * @swagger
 * /api/placement/credential/register:
 *   post:
 *     summary: Register a new user for placement credentials
 *     tags: [Placement Credential]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: User's username
 *               password:
 *                 type: string
 *                 description: User's password
 *               email:
 *                 type: string
 *                 description: User's email
 *     responses:
 *       201:
 *         description: Successfully registered
 *       400:
 *         description: Bad request, missing or invalid fields
 *       500:
 *         description: Server error
 */
router.post("/register", registerHandler);

/**
 * @swagger
 * /api/placement/credential/update/{id}:
 *   put:
 *     summary: Update user information for placement credentials
 *     tags: [Placement Credential]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Updated username
 *               email:
 *                 type: string
 *                 description: Updated email
 *     responses:
 *       200:
 *         description: Successfully updated user details
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.put("/update/:id", updateHandler);

/**
 * @swagger
 * /api/placement/credential/delete/{id}:
 *   delete:
 *     summary: Delete a user for placement credentials
 *     tags: [Placement Credential]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Successfully deleted the user
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.delete("/delete/:id", deleteHandler);

module.exports = router;
