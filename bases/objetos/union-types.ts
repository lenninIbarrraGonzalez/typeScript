(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let MyCustomVariable:( string | number | Hero) = 'Fernando';
    console.log(typeof MyCustomVariable);

    MyCustomVariable = 20;
    console.log(typeof MyCustomVariable);

    MyCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }

    console.log(typeof MyCustomVariable);
    
})()