import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

import { NewCollection } from './collections.js'

Meteor.methods({
	'newCollection.insert'(obj) {
		check(obj, {})
		Seats.insert(obj)
	},
	'newCollection.update'(id) {
		check(id, String)
		Seats.update(id)
	},
	'newCollection.remove'(id) {
		check(id, String)
		Seats.remove(id)
	},
})
