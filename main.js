const firstName = 'john';
const lastName = 'Wick';

const fullName = firstName + ' ' + lastName;

console.log("Je m'appel", firstName, lastName);
console.log(fullName.length);
console.log(firstName.charAt(1));
console.log(fullName.toUpperCase());




const titre = "naRcos";
const titreCap = titre.charAt(0).toUpperCase() + titre.slice(1).toLowerCase()
console.log(titreCap)



const villes = ['Paris', 'Berlin', 'Marseille'];
    for (let index = 0; index < villes.length; index++) {
        console.log(villes[index]);
    }



//1 - calculer la total
  //on boucle sur le tableau pour acceder a chaque élément
  //on addition
//3 - 

const note = [12, 16, 13, 17, 19, 16];

const n = note.length;
let somme = 0;

for(let i=0; i<n; i++)
   {
        somme += note[i];
    }
    const resultat = somme/n;
    console.log(resultat);




const fibonacci = [0, 1, 1, 2, 3, 5];

for (let i = fibonacci.length; i < 50; i++) 
  {
   fibonacci[i]= (fibonacci[i-2] + fibonacci[i-1]);
  }
  console.log(fibonacci); 




const m = [2, 4, 9,];

for (let i = 0; i < n.length; i++)
{
  m[i] *= m[i];
  console.log(n[i]);
}



const film = "avengers";

let s = 'avengers';
let o = s.split('').reverse().join('');

console.log(m);