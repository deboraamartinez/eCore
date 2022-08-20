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
      const addPerson = peopleArray.push(newPerson)
      return res.status(201).json(addPerson)
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
        return a.name - b.name
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

}




module.exports = PeopleController