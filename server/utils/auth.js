const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

  module.exports = {
    authMiddleware: function ({ context }, next) {
      const { token } = context;
  
      if (!token) {
        throw new Error('You have no token!');
      }
  
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        context.user = data;
      } catch {
        throw new Error('Invalid token');
      }
  
      return next();
    },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
