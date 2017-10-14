import { Meteor } from 'meteor/meteor'

import { NewCollection } from './collections.js'

Meteor.publish('newCollection', function(par1, par2) {
	return NewCollection.find()
})
