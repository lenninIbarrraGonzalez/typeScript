(() => {

    let avanger: any = 123;
    let exists;
    let power;

    avanger = 'Dr Strange';
    //console.log(avanger.charAt(0));
    //al ser un any no hay ayuda para los metodos
    //para ver los metodos puedo hacer un cateo
    console.log((avanger as string).charAt(0));

    avanger = 15.22222;
    // console.log(avanger.toFixed(2));
    //otra forma de hacer casteo
    console.log( <number>avanger.toFixed(2));

    console.log(exists);

    





})()