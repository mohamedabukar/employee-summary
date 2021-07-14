class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getname() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports= Employee;

const trinh = new Employee("Trinh", "1", "agmail.com")
const mohamed = new Employee("Mohamed", "1", "bgmail.com")