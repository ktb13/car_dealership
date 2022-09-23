const Car = require('./car')

let Toyota; 
beforeEach(()=>{Toyota=new Car('Toyota', 2, 2.0)})
test('This is the manufacturer',()=>{expect(Toyota.manufacture).toBe("Toyota");})


 test('This is the prize',()=>{expect(Toyota.prize).toBe(2);})

 test('This is the engine size',()=>{expect(Toyota.engine).toBe(2.0);})