(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){

        }
    }

    class Xmen extends Mutante{
        salvarMundo() {
            return 'Mundo Salvado';
        }
    }
    class Villian extends Mutante{
        consquistarMundo(){
            return 'Mundo Conquistado';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    // console.log(wolverine);
    // console.log(magneto);

    const printName = (character:Mutante) => {
        // console.log(character.realName);
    }

    printName(wolverine);

})()