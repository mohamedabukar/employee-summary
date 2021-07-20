const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("instance", () => {
        it("should create an object", () => {

            const obj = new Manager();

            expect(typeof (obj)).toEqual("object");
        });
    });
    describe("name", () => {
        it("should set name", () => {

            const obj = new Manager("Mohamed");

            expect(obj.name).toEqual("Mohamed");
        });
    });
    describe("id", () => {
        it("should set id", () => {
            const obj = new Manager("Mohamed", 35)

            expect(obj.id).toEqual(35);
        });
    });
    describe("email", () => {
        it("should set email", () => {
            const obj = new Manager("mohamed", 3, "target@email.com");

            expect(obj.email).toEqual("target@email.com")
        });
        describe("officeNumber", () => {
            it("should set the office number", () => {
                const obj = new Manager("mohamed", 3, "target@email.com", 4);

                expect(obj.officeNumber).toEqual(4)
            });
        });
    });
    describe("getRole()", () => {
        it("should return employee role via getRole()", () => {
            const obj = new Manager("mohamed")
            expect(obj.getRole()).toEqual("Manager");
        });
    })});
    