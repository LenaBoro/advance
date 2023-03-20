class Billing {
    amount = 0;
    typeCalculate;

    constructor(typeCalculate) {
        this.typeCalculate = typeCalculate;
    }

    calculateTotal(...args) {
        return this.amount = this.typeCalculate.calculate(...args);
    }
}


class Count {
    calculate(...args) {
        return;
    }
}

class fixBilling extends Count {
    calculate(amount) {
        return amount;
    }
}

class hourBilling extends Count {
    calculate(hours, amount) {
        return hours * amount;
    }
}
class itemBilling extends Count {
    calculate(hours, items) {
        return hours * items;
    }
}

const billing1 = new Billing(new hourBilling());
const billing2 = new Billing(new itemBilling());

billing1.calculateTotal(4, 100);
billing2.calculateTotal(4, 2);

console.log(billing1);
console.log(billing2);