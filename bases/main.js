"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(function () {
    var avangers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Jr',
        vision: 'Paul Betttany',
        activo: true,
        poder: 100.5555
    };
    var printAvanger = function (_a) {
        var ironman = _a.ironman, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    var avengersArr = ['cap. América', 'Iron Man', 'Hulk'];
    var cap = avengersArr[0], ironman = avengersArr[1];
    console.log(cap);
    console.log(ironman);
})();
(function () {
    var ironman = {
        name: 'Ironman',
        weapon: 'Armosuit'
    };
    var capitanAmerica = {
        name: 'Capitan America',
        weapon: 'shield'
    };
    var thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    var avangers = [ironman, thor, capitanAmerica];
    for (var _i = 0, avangers_1 = avangers; _i < avangers_1.length; _i++) {
        var avanger = avangers_1[_i];
        console.log(avanger.name, avanger.weapon);
    }
})();
(function () {
    var animal = 'leon';
    console.log(animal);
    var NOMBRE = 'Lennin';
    var getName = function () {
        console.log('nombre');
    };
})();
//# sourceMappingURL=main.js.map