// $push

db.users.updateOne(
  {
    name: 'Rafael'
  },
  {
    $push: {
      courses: 'Python'
    }
  }
)

// $push $each
db.users.updateOne(
  {
    name: 'Eduardo'
  },
  {
    $push: {
      courses: {
        $each: ['Django', 'Rails', 'Rust']
      }
    }
  }
)

// $position
db.users.updateOne(
  {
    name: 'Rafael'
  },
  {
    $push: {
      courses: {
        $each: ['Base de Datos'],
        $position: 0
      }
    }
  }
)

// $sort
db.users.updateOne(
  {
    name: 'Fernando'
  },
  {
    $push: {
      scores: {
        $each: [10, 10],
        $sort: 1
      }
    }
  }
)

db.users.updateOne(
  {
    name: 'Uriel'
  },
  {
    $push: {
      scores: {
        $each: [7, 7],
        $sort: -1
      }
    }
  }
)