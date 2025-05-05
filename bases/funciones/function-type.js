"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWord = function () { return "El mundo esta salvado"; };
    // let myFunction: Function;
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
//# sourceMappingURL=function-type.js.map