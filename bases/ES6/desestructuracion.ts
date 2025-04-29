(() => {

    type Avangers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avangers: Avangers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Jr',
        vision: 'Paul Betttany',
        activo: true,
        poder: 100.5555
    }

    // const {poder, vision} = avangers;
    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvanger = ({ironman, ...resto}:Avangers) => {
        console.log(ironman, resto);
    }

    //printAvanger(avangers);

    const avengersArr: string[] = [ 'cap. América', 'Iron Man', 'Hulk'];
    // const avengersArr: [string,boolean,number] = [ 'cap. América', true, 100];

    // const ironman = avengersArr[1];
    const [cap ,ironman,] = avengersArr;
    console.log(cap);
    console.log(ironman);



})()