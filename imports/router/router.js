import { Meteor } from 'meteor/meteor'
import { Router } from 'meteor/iron:router'

Router.configure({
	layoutTemplate: 'mainLayout',
	loadingTemplate: 'loading'
})

Router.route('/', {
	name: 'homepage',
	data: function() {
		return {
			isHomepage: true
		}
	}
})

Router.route('/(.*)', function () {
	this.redirect('homepage')
})
