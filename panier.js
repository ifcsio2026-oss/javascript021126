let prix = Number(prompt("Entrer le prix :"));
let quantite = Number(prompt("Entrer la quantité :"));

let total = (prix * quantite);
if (total > 50) 
{
    total = total * 0.9;
    alert(`prix apres reduction : ${total}`);
}
else
{
    alert(`aucun reduction, prix total : ${total}`);
}
