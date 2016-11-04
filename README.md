# string-pattern-object

Do you like a new ES6 feature called [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)?

	const person = {
		'firstname': 'John',
		'lastname': 'Lennon'
	};
	console.log(`My name is ${person.firstname} ${person.lastname}!`);

which will print out something like:

	'My name is John Lennon!'

What if we could do it the other way and parse the name from a string and return the object?

	const stringPattern2obj = require('.');
	const person = stringPattern2obj('My name is John Lennon!', 'My name is ${firstname} ${lastname}!');
	console.log(person);

which will print out something like:

	{
		'firstname': 'John',
		'lastname': 'Lennon'
	}

Simple and easy.

Please note, the name of your properties should contain only [a-zA-Z] characters.
