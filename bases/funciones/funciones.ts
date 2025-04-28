(() => {

    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatisenal = ():string => {
        return 'Batisenal Activada';
    }

    console.log(typeof activateBatisenal);

    const heroName = returnName();

})()