"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo Salvado';
        }
    }
    class Villian extends Mutante {
        consquistarMundo() {
            return 'Mundo Conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
    };
    printName(wolverine);
})();
(() => {
    class Avanger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avanger.avgAge = avgAge;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avanger.avgAge = 35;
    const antman = new Avanger('Antman', 'Capitan', 'Scoot Langer', 20);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 30) {
                throw new Error('El nombre debe ser mayor a 3 letras');
            }
            this.name = name;
        }
        getFullnameDesdeXmen() {
        }
    }
    const wolverine = new Xmen('Wolvering', 'Logan', true);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
    }
    const apocalipsis = new Apocalipsis('Soy Apocalipsis.. el único');
    console.log(apocalipsis);
});
//# sourceMappingURL=main.js.map