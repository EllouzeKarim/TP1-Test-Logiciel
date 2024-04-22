export function trier(tableau) {
    /*const n = tableau.length;
   for (let i = 0; i < n - 1; i++) {
       for (let j = 0; j < n - i - 1; j++) {
           if (tableau[j] > tableau[j + 1]) {
               const temp = tableau[j];
               tableau[j] = tableau[j + 1];
               tableau[j + 1] = temp;
           }
       }
   }
   return tableau;*/
    return tableau.sort();
}