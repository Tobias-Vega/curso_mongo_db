// Operadores lógicos
// $and y $or

// Obtener todos los usuarios cuya edad sea mayor a 20 y menor a 26
db.users.find(
  {
    $and: [
      {
        age: {$gt: 20}
      },
      {
        age: {$lt: 26}
      }
    ]
  }
)

// Obtener todos los usuarios cuyo nombre sea Eduardo o Uriel
db.users.find({
  $or: [
    {
      name: 'Eduardo'
    },
    {
      name: 'Uriel'
    }
  ]
})

// Obtener todos los usuarios cuyo nombre sea Eduardo Ismael o Uriel o la edad sea mayor a 20 y menor a 25

db.users.find({
  $or: [
    {
      name: 'Eduardo Ismael'
    },
    {
      name: 'Uriel'
    },
    {
      $and: [
        {
          age: { $gt: 20 },
          age: { $lt: 25 }
        }
      ]
    }
  ]
})