(()=>{

    type Avenger = {
        name: string;
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armosuit'
    }

    const capitanAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avangers:Avenger[] = [ironman, thor, capitanAmerica];

    for (const avanger of avangers) {
        console.log(avanger.name, avanger.weapon);
    }

})()