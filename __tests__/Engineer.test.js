const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("instance", () => {
        it("should create an instance", () => {
            const obj = new Engineer();

            expect(typeof(obj)).toEqual("object");
        })
    })
    describe("github", () => {
        it("should set github", () => {
            const obj = new Engineer("Mohamed", 35, "target@fakeemail.com", "jadja");

            expect(obj.github).toEqual("jadja")
        })
    })
    describe("getGithub", () => {
        it("should get github", () => {
            const obj = new Engineer("Mohamed", 35, "target@fakeemail.com", "jadja");

            expect(obj.getGithub()).toEqual("jadja");
        })
    })
})