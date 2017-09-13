'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken(user) {
  const payload = {
      sub: user._id,
      iat: moment().unix(),//fechas cuando se createToken
      exp: moment().add(14, 'days').unix(),//cuadno expira, q caduque en 14 dias
  }

  return jwt.encode(payload, config.SECRET_TOKEN);

}

module.exports = createToken;
