'use strict';

module.exports = {

    secrets: {
        session: "tts-secure",
        expiresIn: 2629746000
    },

    db:{
        URI: 'mongodb://localhost:27017/tts'
    },

    mailer:{
        auth:{
            user: 'ttsprodeveloper@gmail.com',
            pass: 'tts@1234'
        }
    }
}