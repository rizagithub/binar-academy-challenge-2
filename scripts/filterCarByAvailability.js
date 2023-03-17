function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available == true) {
      result.push(cars[i]);
    }
  }
  
  // menggunakan array method
  // const filteredCars = result.filter((a) => a.available == true);
  // console.table(filteredCars);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  console.log(result);
  return result;
}
