const peopleArray = []


const PeopleController = {

  index: async (req, res) => {
    try {
      return res
        .json(peopleArray)
        .status(200)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  createPerson: async (req, res) => {
    const newPerson = req.body
    try {
      if (!newPerson.name || !newPerson.age) {
        return res
          .status(400)
          .json({ error: 'You need to put age and name' })
      }
      if (isNaN(newPerson.age)) {
        return res
          .status(400)
          .json({ error: 'The age must be a number' })
      }
      if (!isNaN(newPerson.name) && typeof newPerson.name === 'string') {
        return res
          .status(400)
          .json({ error: 'The name must be a string' })
      }
      const addPerson = peopleArray.push(newPerson)
      return res
        .status(201)
        .json({ message: 'Person successfully created' })
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  getByAge: async (req, res) => {
    try {
      const getAge = peopleArray.sort(function (a, b) {
        return a.age - b.age
      })
      return res
        .json(getAge)
        .status(200)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  getByName: async (req, res) => {
    try {
      const getName = peopleArray.sort(function (a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      })
      return res
        .json(getName)
        .status(200)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  getOrderdByAge: async (req, res) => {
    try {

      const getKids = peopleArray.filter(el => el.age < 11)
      const getTeenagers = peopleArray.filter(el => el.age >= 12 && el.age <= 19)
      const getAdults = peopleArray.filter(el => el.age >= 20 && el.age <= 65)
      const getSeniors = peopleArray.filter(el => el.age > 65)
      return res
        .json({ Kids: getKids, Teenagers: getTeenagers, Adults: getAdults, Seniors: getSeniors })
        .status(200)

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }

}




module.exports = PeopleController