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

const billingCount1 = new CalculateOperation(new HourOperation());
const billingCount2 = new CalculateOperation(new ItemOperation());
const billingCount3 = new CalculateOperation(new FixOperation());

billingCount1.calculateTotal(4, 100);
billingCount2.calculateTotal(4, 2);
billingCount3.calculateTotal(100);

console.log(billingCount1);
console.log(billingCount2);
console.log(billingCount3);