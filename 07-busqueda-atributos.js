// Obtener todos los usuarios que posean apellido

db.users.find(
  {
    last_name: {
      $exists: true
    }
  }
)

// Obtener todos los usuarios cuyo atributo createdAt sea de tipo date

db.users.find(
  {
    createdAt: {
      $type: 'date'
    }
  }
)