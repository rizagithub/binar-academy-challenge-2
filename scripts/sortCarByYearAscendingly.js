function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for(let i = 1; i < result.length; i++) {
    let j = i;
    while (j > 0  && result[j - 1].year > result[j].year) {
      // temp digunakan sebagai wadah menempatkan value result[j]
      let temp = result[j - 1];
      result[j - 1] = result[j];
      result[j] = temp;
      j--;
    }
  }

  // menggunakan array method sort
  // result.sort((a, b) => a.year - b.year);
  // console.table(result);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
