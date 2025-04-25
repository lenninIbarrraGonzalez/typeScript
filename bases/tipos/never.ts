(() => {

    //despues de haber llamado la funcion de tipo never ya no continua, revienta
    const error = (message:string):never  => {
        throw new Error(message)
    } 

    error('Auxilio');

})()