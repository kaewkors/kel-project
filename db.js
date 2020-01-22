const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTypes,
//   getUsers: getUsers
}

function getTypes (db = connection) {
  return db('alltypes').select()
}

// function getType (id, db = connection) {
//   return db('alltypes').where('id', id).first()
// }