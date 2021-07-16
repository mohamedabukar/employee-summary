const Intern = require("../lib/Intern");

describe("intern", () => {
    describe("instance", () => {
        it("should create an object",() => {
            const obj = new Intern();

            expect(typeof(obj)).toEqual("object");
        })
    })
    describe("school", () => {
        it("should set school", () =>{
            const obj = new Intern("m", 5, "m@gmail.com", "Hogwarts");

            expect(obj.school).toEqual("Hogwarts")
        })
    })
    describe("getSchool", () => {
        it("should set school", () => {
            const obj = new Intern("m", 5, "m@gmail.com", "Hogwarts");

            expect(obj.getSchool()).toEqual("Hogwarts");
        })
    })
    describe("getRole", () => {
        it("should set role", () => {
            const obj = new Intern();

            expect(obj.getRole()).toEqual("Intern");
        })
    })
})