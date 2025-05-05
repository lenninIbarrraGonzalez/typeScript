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
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map