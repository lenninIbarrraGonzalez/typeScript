(() => {

    const hero: [string, number] = ['Dr strange', 100];
    // hero[0] = 1;
    // hero[1] = "batman";

    hero[0] = 'Iron Man';
    hero[1] = 300;

    console.log(hero);

    const villan: [string, number, boolean] = ['Iron Man', 100, false];
    villan[2] = true; 

    console.log(villan);


})()