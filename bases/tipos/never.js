"use strict";
(function () {
    //despues de haber llamado la funcion de tipo never ya no continua, revienta
    var error = function (message) {
        throw new Error(message);
    };
    error('Auxilio');
})();
