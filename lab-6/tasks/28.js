const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const month = new (class Month {
  name(number) { 
    return months[number] 
  }
  
  number(name) { 
    return months.indexOf(name)
  }
})

console.log(month.name(2));
console.log(month.number('November')); 
