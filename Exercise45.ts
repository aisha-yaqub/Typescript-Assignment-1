function make_car(manufacturer:string, model:string, ...args:[string, any][]){

   let car: {manufacturer: string, model: string, [key:string]: any} = {manufacturer, model};
   
    for(const [key, value] of args){
            car[key] = value;
    }   

   return car;
}

// Car 1 with no optional features
console.log(make_car('Honda', 'Civic'));
// Car 2 with one optional feature
console.log(make_car('Hyundai', 'Sonata', ['color', 'black']));
// Car 3 with two optional features
console.log(make_car('Audi', 'A3', ['color', 'black'], ['year', '2022']));