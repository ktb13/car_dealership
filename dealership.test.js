const Dealership = require('./dealership')

let BNTACars; 
beforeEach(()=>{BNTACars=new Dealership('BNTA', 100, 60)})
test('This is the dealership name',()=>{expect(BNTACars.name).toBe("BNTA");})


 test('This is the maximum number of cars',()=>{expect(BNTACars.noOfCars).toBe(100);})

 test('This is the stock size',()=>{expect(BNTACars.stock).toBe(60);})