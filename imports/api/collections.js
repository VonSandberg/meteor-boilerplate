import { Mongo } from 'meteor/mongo'

const NewCollection = new Mongo.Collection('newCollection')

// just to be available on client while debugging
global.NewCollection = NewCollection

export default NewCollection
