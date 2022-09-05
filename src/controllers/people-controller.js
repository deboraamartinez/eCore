const express = require('express')
const person = require('../../models/Person')


const PeopleController = {

  index: async (req, res) => {
    try {
      const allPeople = await person.find()
      return res
        .json(allPeople)
        .status(200)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  createPerson: async (req, res) => {
    const newPerson = new person(req.body)
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
      newPerson.save()
      return res
        .status(201)
        .json({ message: 'Person successfully created' })
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  getByName: async (req, res) => {
    try {
      const getName = await person.find().sort({ "name": 1 })
      return res
        .json(getName)
        .status(200)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  getByAge: async (req, res) => {
    try {
      const getAge = await person.find().sort({ "age": 1 })
      return res
        .json(getAge)
        .status(200)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  getOrderdByAge: async (req, res) => {
    try {
      const getKids = await person.find({ age: { $lte: 11 } }).sort({ "age": 1 })
      const getTeenagers = await person.find({ $and: [{ age: { $gt: 12 } }, { age: { $lt: 19 } }] }).sort({ "age": 1 })
      const getAdults = await person.find({ $and: [{ age: { $gt: 20 } }, { age: { $lt: 65 } }] }).sort({ "age": 1 })
      const getSeniors = await person.find({ age: { $gt: 65 } }).sort({ "age": 1 })
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