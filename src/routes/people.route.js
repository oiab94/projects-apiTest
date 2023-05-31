const { Router } = require("express");
const { 
	getAllPeople, 
	getPeopleById,
	getCharacterBySearch } = require("../controllers/people.controller");

// * Variables
const router = Router();

// * Direccionamiento

/**
 * @swagger
 * /api/people:
 *  get:
 *     summary: Return a object with all the characters from Star Wars
 *     description: Get all the Star Wars characters from SWAPI
 *     responses:
 *      200:
 *         description: OK
 *      400:
 *         description: Bad Request
 */
router.get("/api/people", getAllPeople);

/**
 * @swagger
 * /api/people/{id}:
 *  get:
 *     summary: Return a object with the same ID
 *     description: Get one character from Star Wars
 *     parameters:
 *       - name: id
 *         description: Parameter must be a number
 *         in: path
 *         required: true
 *     responses:
 *      200:
 *         description: OK
 *      400:
 *         description: Bad Request
 */
router.get("/api/people/:id", getPeopleById);
router.get("/api/peopleSearch/", getCharacterBySearch);

module.exports = router;