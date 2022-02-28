export const printArrayStar = (num) => {
    const array = [];
  
    for (let i = 0; i < num; i++) {
      let star = "";
  
      for (let stars = i; stars >= 0; stars--) {
        star += "*";
      }
      array.push(star);
    }
    return array;
  };
  
  export default printArrayStar;