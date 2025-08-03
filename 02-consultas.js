db.users.find(
  { 
    age: 25 
  }, // Criterios -> Where
  { 
    name: true, 
    email: true, 
    _id: false 
  } // Select
).pretty() // formatea la consulta