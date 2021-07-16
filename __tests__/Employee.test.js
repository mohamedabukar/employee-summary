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
    describe("id", () => {
        it("should set id", () =>{
            const obj = new Employee("Mohamed", 35);
             
            expect(obj.id).toEqual(35);
        });
    });
    describe("email", () => {
        it("should set email", () =>{
            const obj = new Employee("Mohamed");

        })
    })
    
    describe("getname()", () => {
        it("should return name via getname()", () => {

            const obj = new Employee("Mohamed");

            expect(obj.getname()).toEqual("Mohamed");
        });
    });
    describe("getId()", () => {
        it("should return Id via getId()",() => {
            const obj = new Employee("Mohamed", 35);

            expect(obj.getId()).toEqual(35);
        });
    });
    describe("getEmail()", () => {
        it("should return email via getEmail()",() => {
            const obj = new Employee("Mohamed", 35, "target@fakeemail.com");
            expect(obj.getEmail()).toEqual("target@fakeemail.com")
        });
    });
    describe("getRole()", () => {
        it("should return employee role via getRole()",() => {
            const obj = new Employee("Mohamed");
            expect(obj.getRole()).toEqual("Employee");
        });
    });
});
