const User = require('./User');

module.exports = {
	Query: {
		users: () => User.find(),
		user: (_, { id }) => User.findById(id)
	},

	Mutation: {
		createUser: (_, { firstName, lastName, email, document }) => User.create({ firstName, lastName, email, document })
	}
};
