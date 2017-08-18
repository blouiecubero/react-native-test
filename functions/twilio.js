const twilio = require('twilio');

const accountSid = 'AC8730ba0b26afc71079ce1f3596b30f09';
const authToken = 'c849ef0dd1a834bad84acb0bb45f637e';

module.exports = new twilio.Twilio(accountSid, authToken);