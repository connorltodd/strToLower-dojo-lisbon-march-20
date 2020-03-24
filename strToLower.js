// Hard Mode: solve it using the method `charCodeAt()`

function strToLower(str) {
  str = str.split('')
  let arr = [];

  str = str.map(element => {
    element = element.charCodeAt();
    console.log('elem', element);
    
    if (65 <= element && element <= 90){
      element = element + 32;
      console.log('elem', element);
    } else {
      element = element;
      console.log('elem', element);
    }

    str = String.fromCharCode(element);
    console.log(str);
    arr.push(str)
    })
  arr = arr.join('')

  console.log(arr);
  return arr  
}

  //return str.charCodeAt(i)

console.log(strToLower('hEL'));

module.exports = strToLower;
