import peopleController from "controllers/people.controller";
import { Router } from "express";

const peopleRouter = Router();

peopleRouter.get('/person', peopleController.getRandomPerson)

export default peopleRouter