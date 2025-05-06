"use strict";
(() => {
    let flash = {
        name: 'Barri Alent',
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Lennin',
        age: 44,
        address: {
            id: 125,
            zip: 'Y2K',
            city: 'Pasto'
        },
        getFullAddress() {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        }
    };
    const client2 = {
        name: 'Valentina',
        age: 25,
        address: {
            id: 666,
            zip: 'Y2K',
            city: 'Pasto'
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
    console.log(addNumbersFunction(5, 3));
})();
//# sourceMappingURL=main.js.map