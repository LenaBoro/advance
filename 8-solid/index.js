class CalculateOperation {
    amount = 0;
    constructor(typeCalculate) {
        this.typeCalculate = typeCalculate;
    }

    calculateTotal(...args) {
        return this.amount = this.typeCalculate.calculate(...args);
    }
}

class Operation {
    calculate() {
        return;
    }
}

class FixOperation extends Operation {
    calculate(amount) {
        return amount;
    }
}

class HourOperation extends Operation {
    calculate(hours, amount) {
        return hours * amount;
    }
}
class ItemOperation extends Operation {
    calculate(hours, items) {
        return hours * items;
    }
}

const billing1 = new CalculateOperation(new HourOperation());
const billing2 = new CalculateOperation(new ItemOperation());
const billing3 = new CalculateOperation(new FixOperation());

billing1.calculateTotal(4, 100);
billing2.calculateTotal(4, 2);
billing3.calculateTotal(100);

console.log(billing1);
console.log(billing2);
console.log(billing3);