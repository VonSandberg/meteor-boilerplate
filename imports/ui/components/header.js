import { Template } from 'meteor/templating'

import './header.html'

Template.header.helpers({
	someHelper() {
		return true
	},
})

Template.header.events({
	'click button'(event, instance) {
		console.log("click")
	},
})
