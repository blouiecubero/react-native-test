const admin = require('firebase-admin');

module.exports = function(req, res) {
	// verify that user provided a phone
	if(!req.body.phone) {
		return res.status(422).send({ error: 'No number provided' });
	}

	// format the phone number to remove dashes and parens
	const phone = String(req.body.phone).replace(/[^\d]/g, '');

	// create new user using the phone number 
	admin.auth().createUser({ uid: phone })
		 .then(user => res.send(user))
		 .catch(err => res.status(422).send({error: err}));
	// respond to user request , saying account has been made 
}	