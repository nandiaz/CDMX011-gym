function printArrayStar(num) {
  const array = [];

  for (let i = 0; i < num; i++) {
    console.log(num)
    let elementArray = "";

    for (let stars = i; stars >= 0; stars--) {
      elementArray += "*";
    }

    array.push(elementArray);
  }

  return array;
}
num = 3;