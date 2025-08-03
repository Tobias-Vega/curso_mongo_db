db.users.find(
  { age: 25}, // Criterios -> Where
  {name: true, email: true, _id: false} // Select
).pretty() // formatea la consulta

// $ne --> diferente a
// Obtener todos los usuarios cuya edad sea diferente a 25

db.users.find(
  {
    age: {
      $ne: 25
    }
  }
)

// $eq --> igual a
// Obtener todos los usuarios cuya edad sea igual a 25
db.users.find(
  {
    age: {
      $eq: 25
    }
  }
)

// find > documento
// findOne
db.users.findOne(
  {
    age: {
      $ne: 25
    }
  }
)

// Obtener todos los usuarios cuya edad sea mayor a 20