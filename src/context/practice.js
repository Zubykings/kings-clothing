const arr = [5, 8, 7, 2, 13];

const addArr = () => {
  arr.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
};

console.log(addArr)