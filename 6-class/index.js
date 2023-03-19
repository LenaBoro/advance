class Car {
    #model;
    #brand;
    #mileage;

    constructor(model, brand, mileage) {
        this.#model = model;
        this.#brand = brand;
        this.#mileage = mileage;
    }

    get getMileage() {
        return this.#mileage;
    }

    set setMileage(newMileage) {
        if (this.getMileage > newMileage) { return false };
        this.#mileage = newMileage;
    }

    info() {
        console.log(this.#model, this.#brand, this.#mileage);
    }
}

const car1 = new Car('Supra', 'Toyota', 100);
car1.getMileage;
car1.setMileage = 200;
car1.setMileage = 100;
car1.info();