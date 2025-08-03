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
db.users.find(
  {
    age: {
      $gt: 20 // >
    }
  }
)

// Obtener todos los usuarios cuya edad sea mayor o igual a 26
db.users.find(
  {
    age: {
      $gte: 26 // >=
    }
  }
)

// Obtener todos los usuarios cuya edad sea menor o igual a 26
db.users.find(
  {
    age: {
      $lte: 26 // <=
    }
  }
)

// Obtener todos los usuarios cuya edad sea menor a 26
db.users.find(
  {
    age: {
      $lt: 26 // <
    }
  }
)