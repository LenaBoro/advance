class Car {
    #model;
    #brand;
    #mileage;

    constructor(model, brand, mileage) {
        this.#model = model;
        this.#brand = brand;
        this.#mileage = mileage;
    }

    get mileage() {
        return this.#mileage;
    }

    set mileage(newMileage) {
        if (this.mileage > newMileage) {
            return false;
        };
        this.#mileage = newMileage;
    }

    info() {
        console.log(this.#model, this.#brand, this.#mileage);
    }
}

const car1 = new Car('Supra', 'Toyota', 100);
car1.mileage;
car1.mileage = 200;
car1.mileage = 100;
car1.info();