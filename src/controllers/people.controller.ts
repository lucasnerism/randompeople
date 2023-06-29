import { Request, Response } from "express"
import peopleService from "services/people.service"

const getRandomPerson = async (req: Request, res: Response) => {
  const result = await peopleService.getRandomPerson()
  res.status(200).send(result)
}

const peopleController = {
  getRandomPerson
}

export default peopleController