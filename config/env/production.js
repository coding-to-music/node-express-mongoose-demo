'use strict';

/**
 * Expose
 */

module.exports = {
  db: process.env.MONGO_URI,
  twitter: {
    clientID: process.env.TWITTER_CLIENTID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackURL:
      'https://node-express-mongoose-demo.vercel.app/auth/twitter/callback/'
  },
  github: {
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL:
      'https://node-express-mongoose-demo.vercel.app/auth/github/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_CLIENTID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL:
      'https://node-express-mongoose-demo.vercel.app/auth/linkedin/callback'
  },
  google: {
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL:
      'https://node-express-mongoose-demo.vercel.app/auth/google/callback'
  }
};
