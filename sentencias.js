db.books.insertMany(
  [
  {title: 'Don Quijote de la mancha', sales: 500},
  {title: 'Histora de dos ciudades', sales: 200},
  {title: 'El señor de los Anillos', sales: 150},
  {title: 'El principito', sales: 140},
  {title: 'El hobbit', sales: 100},
  {title: 'Alicia en el país de las maravillas', sales: 100},
  {title: 'El código Da Vinci', sales: 80},
  {title: 'El alquimista', sales: 65},
  ]
)

for(i = 0; i < 100; i++) {
  db.demo.insertMany(
    [
      { name: 'user' + i }
    ]
  )
}

db.items.insertMany(
  [
    { type: 'Camera', color: 'Red', price: 120 },
    { type: 'Laptop', color: 'White', price: 400 },
    { type: 'Laptop', color: 'Black', price: 600 },
    { type: 'Camera', color: 'Silver', price: 200 },
    { type: 'Microphone', color: 'Black', price: 200 },
    { type: 'Mouse', color: 'White', price: 50 },
    { type: 'Monitor', color: 'White', price: 50 },
  ]
)

db.autores.insertMany(
  [
    {nombre: 'J.K Rowling', nacionalidad: 'Británica'},
    {nombre: 'George R. R. Martin', nacionalidad: 'Estadounidense'}
  ]
)

db.libros.insertMany(
  [
    {
      titulo: 'Harry Potter y la piedra filosofal',
      fechaLanzamiento: 1997,
      autor_id: ObjectId('688ff17f0e306a0ba9a5a2fd')
    },
    {
      titulo: 'Harry Potter y El prisionero de Azkabán',
      fechaLanzamiento: 1999,
      autor_id: ObjectId('688ff17f0e306a0ba9a5a2fd')
    }
  ]
)