(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            // console.log('Constructor avenger llamado');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant:boolean
        ){
            super(name , realName)
        // console.log('Constructor Xmen llamado');
        }

        //no recibe argumentos
        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        //recibe argumentos
        set fullName(name:string) {

            if(name.length < 30) {
                throw new Error('El nombre debe ser mayor a 3 letras');
            }

            this.name = name;
        }

        getFullnameDesdeXmen() {
            // console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('Wolvering', 'Logan', true);
    // console.log(wolverine);
    // // wolverine.getFullnameDesdeXmen();
    // wolverine.fullName = 'Fernando';
    // console.log(wolverine.fullName);

})()