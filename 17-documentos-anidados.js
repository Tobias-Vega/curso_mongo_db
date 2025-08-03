// Obtener todos los usuarios que posean una dirección postal

db.users.find(
  {
    address: {
      $exists: true
    }
  }
)

// Obtener todos los usuarios que posean un código postal 1 y un número mayor o igual a 10

db.users.find(
  {
    $and: [
      {
        'address.postalCode': 1
      },
      {
        'address.number': {
          $exists: true
        }
      },
      {
        'address.number': {
          $gte: 10
        }
      }
    ]
  }
)


// Obtener la primera referencia de los usuarios con código postal y referencias

db.users.find(
  {
    $and: [
      {
        address: {
          $exists: true
        }
      },
      {
        'address.references': {
          $exists: true
        }
      }
    ]
  },
  {
    _id: false,
    name: true,
    'address.references': {
      $slice: 1
    }
  }
)

db.users.updateOne(
  {
    name: 'Uriel'
  },
  {
    $set: {
      'address.number': 20,
      'address.references': [
        'Fuera de la casa se encuentra un parque',
        'Fuera de la casa se encuentra un pino (árbol)'
      ]
    }
  }
)

db.users.updateOne(
  {
    name: 'Marines'
  },
  {
    $push: {
      'address.references': {
        $each: [
          'Fuera de la casa hay un río',
          'En la esquina hay un campo de tenis'
        ]
      }
    }
  }
)

// $elemeMatch

// Obtener todos los usuarios que hayan completado por lo menos un curso

db.users.find(
  {
    courses: {
      $elemMatch: {
        completed: true
      }
    }
  }
)

// Obtener todos los usuarios con un progreso mayor a 80

db.users.find(
  {
    courses: {
      $elemMatch: {
        progress: {
          $gt: 80
        }
      }
    }
  }
)

// Obtener el nombre del usuario junto con el titulo de cada uno de sus cursos

db.users.find(
  {
    courses: {
      $exists: true
    }
  },
  {
    _id: false,
    name: true,
    'courses.title': true
  }
)

// Actualizar elementos de listas

db.users.updateOne(
  {
    name: 'Fernando'
  },
  {
    $set: {
      'courses.0.progress': 100,
      'courses.0.completed': true
    }
  }
)

db.users.updateOne(
  {
    name: 'Fernando',
    'courses.title': 'Docker'
  },
  {
    $set: {
      'courses.$.progress': 100,
      'courses.$.completed': true,
      'courses.$.tutor': {
        'name': 'Cody'
      }
    }
  }
)

db.users.updateOne(
  {
    name: 'Fernando',
    'courses.title': 'Docker' 
  },
  {
    $set: {
      'courses.$.tutor.name': 'CodigoFacilito'
    }
  }
)