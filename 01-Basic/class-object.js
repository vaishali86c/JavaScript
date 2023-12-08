
// class

class Animal {
    constructor(name, legcount) {
        this.name = name;
        this.legcount = legcount;
    }

    describe() {
        console.log(`${this.name} has ${this.legcount} legs`);
    }

    static typeoff() {
        console.log("cattss");
    }

}

// object - crate a object

Animal.typeoff();     // static 

let cat = new Animal("cat", 4);
cat.describe();



// static == doesn't depends on objects
//  stati =>  when you want to direct access functions in the class without creating object
