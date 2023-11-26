/* CommonJS */

//Ejemplo 1 
/*
login = (username,password)=>{
    if(!username && !password) return console.log("Tu no estas autorizado")
    console.log(`Welcome ${username}`)
}

module.exports = login
*/


//Ejemplo2

/*

login = (username,password)=>{
    if(!username && !password) return console.log("Tu no estas autorizado")
    console.log(`Welcome ${username}`)
}

const LIKES = 150

module.exports = {
    login,
    LIKES
}
*/



//Ejemplo3

module.exports.login = (username,password)=>{
    if(!username && !password) return console.log("Tu no estas autorizado")
    console.log(`Welcome ${username}`)
}

module.exports.LIKES = 150


/* ES Moules */