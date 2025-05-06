(() => {

    interface Client {
        name: string;
        age?: number;
        address?: Address;
        getFullAddress?(id:string):void;

    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const  client: Client = {
        name: 'Lennin',
        age: 44,
        address: {
            id: 125,
            zip: 'Y2K',
            city: 'Pasto'
        },
        getFullAddress() {
            return this.address?.city;
        }
    }

    const client2: Client = {
        name: 'Valentina',
        age: 25,
        address: {
            id: 666,
            zip: 'Y2K',
            city: 'Pasto'
        }
    }

})()