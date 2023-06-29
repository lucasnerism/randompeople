import { db } from "database/connect";

const findRandomPerson = () => {
  return db.query(`
  SELECT
    id, "firstName", "lastName"
  FROM
    people
  ORDER BY
    RANDOM()
  LIMIT 1
`)
}

const peopleRepository = {
  findRandomPerson
}

export default peopleRepository