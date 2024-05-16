const object = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}

let current = object;
while (current) {
  console.log(current.value);
  current = current.rest;
}


 
