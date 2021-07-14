const Employee = require("../lib/Employee");

describe("Employee", () => {
    //testing to see if an instance can be created from Employee clas
    //should return an object
    describe("instance", () => {
        it("should create an instance", () => {

            const obj = new Employee();

            expect(typeof (obj)).toEqual("object");
        });
    });
    describe("name", () => {
        it("should set name", () => {

            const obj = new Employee("Mohamed");

            expect(obj.name).toEqual("Mohamed");
        });
    });    
    
    describe("getname()", () => {
        it("should return name via getname()", () => {

            const obj = new Employee("Mohamed");

            expect(obj.getname()).toEqual("Mohamed");
        });
    });

});
