(() => {

    const addNumbers = (a:number, b:number) => a + b;
    const greet = (name:string) => `Hola ${name}`;
    const saveTheWord = () => `El mundo esta salvado`;

    // let myFunction: Function;

    let myFunction: (y:number, z:number) => number;
    myFunction = addNumbers;
    console.log(myFunction(1,2));

    let myFunction2: (y:string) => string;
    myFunction2 = greet;
    console.log(myFunction2('Lennin'));

    let myFunction3: () => string;
    myFunction3 = saveTheWord;
    console.log(myFunction3());

})()