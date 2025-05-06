// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;

}

const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villain {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason:Villain = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Villain ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface City {
  (ciudadanos:string[]):number;
}

const ciudadGotica:City = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface PersonaInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Persona implements PersonaInterface {
    constructor(
      public nombre: string,
      public edad: number,
      public sexo: string,
      public estadoCivil: string
    ) {
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo,
        this.estadoCivil = estadoCivil
    }

    imprimirBio():void {
      console.log(`Descripcion de la persona`) ;
    }
}

const persona1 = new Persona ('Laura Gómez', 30, 'femenino', 'soltera');
persona1.imprimirBio();