// Retorna el objeto antes de la actualización por defecto
// new: retorna después de actualizar

db.users.findAndModify(
  {
    query: {
      name: 'Rafael'
    },
    update: {
      $inc: {
        age: 1
      }
    },
    new: true
  },
)