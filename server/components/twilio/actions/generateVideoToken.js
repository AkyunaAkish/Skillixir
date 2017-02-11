require('dotenv').config();
const randomUsername = require('./randos.js');
const AccessToken = require('twilio').AccessToken;
const VideoGrant = AccessToken.VideoGrant;

module.exports = (req, res) => {
    return new Promise((resolve, reject) => {
        const identity = randomUsername();

        const token = new AccessToken(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_API_KEY,
            process.env.TWILIO_API_SECRET
        );

        token.identity = identity;

        const grant = new VideoGrant();
        grant.configurationProfileSid = process.env.TWILIO_CONFIGURATION_SID;
        token.addGrant(grant);

        resolve({
            identity: identity,
            token: token.toJwt()
        });
    });

}
