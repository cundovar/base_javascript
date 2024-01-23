// factory function c'est une maquette (model) pouir creer des objets

const utilisateur = (nom, emails, ...amis) => {
  return {
    nom,
    emails,
    amis,
    login() {
      console.log(`${emails} est connecté`);
    },
    logout() {
      console.log(`${emails} pas connecté`);
    },
  };
};
const utils1 = utilisateur("varas", "cundo@dd.com", "juju", "antoine");
const utils2 = utilisateur(
  "varass",
  "cundsso@dd.com",
  "jusju",
  "azntsoine",
  "gg"
);

console.log("util1", utils1);
console.log("util2", utils2);

utils1.logout();
utils2.login();

// constructor function: maquette (model) pour creation des objets
//pas de crochet car on utise les this
function Utilisateur(noms, emails, ...amis) {
  this.noms = noms;
  this.emails = emails;
  this.amis = amis;
  this.login = function () {
    console.log(`${emails} est connecté`);
  };
  this.logout = function () {
    console.log(`${emails}pas connecté`);
  };
}
// c'est une instance
const utils3 = new Utilisateur("varas", "gmail.com", "ln", "ln2");
const utils4 = new Utilisateur("vas", "gml.com", "l", "l2");
console.log("utils3");
console.log("utils4");

//acces aux methodes

utils3.login();
utils4.login();

//abstraction se baser sur l'essentiel

function Employe(noms, ages, sexe, salaire) {
  this.noms = noms;
  this.ages = ages;
  this.sexe = sexe;
  this.salaire = salaire;
  //detail, privé, on ne peux pas accéder dpuis l'exterieur
  const allocation = 70;
  const primeDeRisque = 600;
  //methode privé
  const calculatrice = function () {
    return salaire + allocation + primeDeRisque;
  };

  // Méthode publique pour accéder à la calculatrice
  this.calculerSalaireFinal = function () {
    return calculatrice();
  };
  this.infoEmploye = function () {
    console.log(`nom:${noms}`);
    console.log(`sex:${sexe}`);
    console.log(`salaire:${salaire}`);
    console.log(`ages:${ages}`);
    console.log(`Salaire final: ${calculatrice()}    `);
  };
}
//l'instance
const Employe1 = new Employe("varas", "45", "male", 1200);
const Employe2 = new Employe("varhas", "4h5", "femelle", 12200);
//l'éssentielle
Employe1.infoEmploye();
Employe2.infoEmploye();
// Employe1.calculatrice() pas possible

//class c'est un model pour creer des objets

class User {
    constructor(nom, mail, ...amis) {
        this.mail = mail;
        this.amis = amis;
        this.nom = nom;
    }
    login() {
        console.log(`${this.nom} est connecté`);
    }
}

const User1 = new User("varas", "45", "male");
const User2 = new User("varhas", "4h5", "femme");
console.log(User1);
console.log(User2);
User2.login();

class Admin extends User {
    // Méthode uniquement accessible à l'admin
    supprimerUser(util) {
        utilisateurs = utilisateurs.filter((utilisateur) => {
            return utilisateur.mail !== util.mail;
        });
    }
}

const User3 = new User("vaferrhas", "4rrh5", "femre");
const User4 = new User("vaeeferrhas", "4eeerrh5", "eeefemre");
let utilisateurs = [User1, User2, User3, User4];
console.log('user', utilisateurs);
console.log('user length', utilisateurs.length);

const admin = new Admin("rhas", "4e", "eeee");
admin.supprimerUser(User3);

console.log('sup', utilisateurs);
console.log('user length 2', utilisateurs.length);
