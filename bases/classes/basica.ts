(() => {

    class Avanger {
        // private name: string = 'Scot Lang';
        // public team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name
        }

        // constructor(name:string, team:string, realName?:string) {
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }

        //Forma corta 
        constructor(
            private name: string,
            private team: string, 
            public realName: string,
            avgAge: number = 55,
        ){
            Avanger.avgAge = avgAge;
        }

        public bio() {
            return `${this.name} (${this.team})`
        }
    }

    const antman: Avanger = new Avanger('Antman', 'Capitan','Scoot Langer', 20);
    // console.log(antman);

    // console.log(antman.bio());
    // console.log(Avanger.getAvgAge());
    

})()