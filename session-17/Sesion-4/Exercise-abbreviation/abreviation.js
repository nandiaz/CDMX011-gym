// Escribe una función que convierte un nombre en iniciales. Esta función toma exactamente dos palabras con un espacio entre ellos.

// La salida debe ser dos letras capitalizadas con un punto que las separa.

// __Ejemplo 1__

// - Entrada: `Sam Harris`
// - Salida: `S.H`

// __Ejemplo 2__

// - Entrada: `Patrick Feeney`
// - Salida: `P.F`

// function abrevName (name) {
    
//     const index = name.indexOf(" ");
// const firstName = name.slice(0, index);
// const lastName = name.slice(index);
// const initials = `${firstName[0]}.${lastName[1]}`;

// return initials
//    } 
//    const names = "Sam Harris"
//    console.log (abrevName(names) )

function abrevName (name) {
    const capitalName = name.split(" ");
    const [first, last] = capitalName
    const capitalize = `${first[0]}.${last[0]}`
 
return capitalize
   } 
   const names = "Sam Harris"
   console.log (abrevName(names) )