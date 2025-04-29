"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var Power;
    (function (Power) {
        Power[Power["nula"] = 0] = "nula";
        Power[Power["min"] = 1] = "min";
        Power[Power["poca"] = 5] = "poca";
        Power[Power["max"] = 100] = "max";
    })(Power || (Power = {}));
    var fuerzaFlash = Power.poca;
    var fuerzaSuperman = Power.max;
    var fuerzaBatman = Power.min;
    var fuerzaAcuaman = Power.nula;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    console.log(pedir_ayuda());
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || 'no lastname').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || 'no lastname');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'no lastname');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArg[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArg.join(' '));
    };
    var superman = fullName('Clark', 'Josep', 'Kent');
    console.log({ superman: superman });
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatisenal = function () {
        return 'Batisenal Activada';
    };
    console.log(typeof activateBatisenal);
    var heroName = returnName();
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWord = function () { return "El mundo esta salvado"; };
    var myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    var myFunction2;
    myFunction2 = greet;
    console.log(myFunction2('Lennin'));
    var myFunction3;
    myFunction3 = saveTheWord;
    console.log(myFunction3());
})();
(function () {
    var flash = {
        name: 'Barri Alent',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo'],
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super velocidad'],
    };
})();
(function () {
    var flash = {
        name: 'Barri Alent',
        age: 24,
        powers: [1, 2],
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var MyCustomVariable = 'Fernando';
    console.log(typeof MyCustomVariable);
    MyCustomVariable = 20;
    console.log(typeof MyCustomVariable);
    MyCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(typeof MyCustomVariable);
})();
(function () {
    var avanger = 123;
    var exists;
    var power;
    avanger = 'Dr Strange';
    console.log(avanger.charAt(0));
    avanger = 15.22222;
    console.log(avanger.toFixed(2));
    console.log(exists);
})();
(function () {
    var numbers = [1, 2, 4, 5, 6];
    console.log(numbers);
    var villans = ['Omega Rojo', 'Duende Verde', 'Dormammu'];
    villans.forEach(function (v) { return console.log(v.toLocaleUpperCase); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = true && false;
    isBatman = (isBatman) ? true : false;
    console.log({ isBatman: isBatman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error('Auxilio');
})();
(function () {
    var isActive = undefined;
    console.log(isActive);
})();
(function () {
    var avangers;
    console.log(avangers);
    var villians = 20;
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = 'Linterna Verde';
    var volcanNegro = "H\u00E9roe: volvan Negro";
    console.log(batman.toUpperCase());
    console.log("I'am ".concat(batman));
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(function () {
    var hero = ['Dr strange', 100];
    hero[0] = 'Iron Man';
    hero[1] = 300;
    console.log(hero);
    var villan = ['Iron Man', 100, false];
    villan[2] = true;
    console.log(villan);
})();
(function () {
    function callBatman() {
    }
    var callSupoerman = function () {
    };
    var a = callBatman();
    console.log(a);
    var b = callSupoerman();
    console.log(b);
})();
