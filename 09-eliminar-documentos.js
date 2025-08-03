db.users.deleteOne(
  {
    name: 'Luis'
  }
)

db.users.deleteMany(
  {
    age: {
      $gt: 24
    }
  }
)

db.users.deleteMany({}) // elimina todos los documentos de una colección

db.users.drop() // elimina una colección

db.dropDatabase() // elimina una base de datos