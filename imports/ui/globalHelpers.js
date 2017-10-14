import { Template } from 'meteor/templating'

Template.registerHelper('isEqual', (value1, value2)  => {
	return value1 === value2
})
