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