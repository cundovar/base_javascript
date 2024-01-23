// object literal [encaspulation]

const utilisateur={

    // on a les propriété :
    // this fait référence à notre object
    noms: "module louis",
    email:"ab@gmail.com",
    amis:['julien','cédric'],
    login(){
        console.log(`${this.email} est connecté`)
    },
    logout(){
        console.log(`${this.email} est déconnecté`)
    },

}

console.log('utilisateur',utilisateur)
console.log(utilisateur.noms)
console.log(utilisateur.email)
//autre façon
console.log(utilisateur['noms'])
utilisateur.noms="justine justine"
utilisateur['email']="e@gmail.com"
console.log(utilisateur)