// insertOne
// insertMany

var user2 = {
  name: "Fernando",
  last_name: "García",
  age: 24,
  email: "eduardo@codigofacilito.com"
}


var user3 = {
  name: "Uriel",
  last_name: "Camacho",
  age: 27,
  email: "uriel@codigofacilito.com"
}

var user4 = {
  name: "Marines",
  last_name: "Méndez",
  age: 25,
  email: "marines@codigofacilito.com"
}

db.users.insertOne(user2)

db.users.insertMany([user3, user4])