import peopleRepository from "repositories/people.repository"

const getRandomPerson = async () => {
  const result = await peopleRepository.findRandomPerson();
  return result.rows[0]
}

const peopleService = {
  getRandomPerson
}

export default peopleService