"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
