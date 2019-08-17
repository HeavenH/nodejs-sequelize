const db = require('../db/models');

module.exports = {
    auth: payload => db.User.findOne(payload),
    create: payload => db.User.create(payload)
}