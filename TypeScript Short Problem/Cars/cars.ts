interface carsData  {
  manufacturer: string;
  model: string;
  [key: string]: any
}

let createCars = (manufacturer: string, model: string, ...args: [string, any]): carsData => {
  const car: carsData = {manufacturer, model};
  
  for(const [key, value] of args){
      car[key] = value;
  }
  return car;
}

const car1 = createCars('Ford', 'Mustang', ['color', 'blue'], ['year', 1969])
console.log(car1)