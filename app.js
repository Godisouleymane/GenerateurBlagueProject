const blagues = [
    "L'oiseau 🦜 sur le baobab ne doit pas oublieeeeer qu'il a porte des lunettes 👓!",
    "La France 🇫🇷 nous a souvent vole nos richesses 💎 💰 ... vous aller aussi nous voler nos footballeur 🏃🏻‍♂️ ?",
    "On as pas besoin d'eau 💦 potable pour eteindre un incendie 🔥,",
    "Le crocodile 🐊 n'attend pas que le gorile 🦍 accouche",
    "Il est est tombe comme du n'importe quoi, on dirait la girafe 🦒 qui s'emmele les pates."
];

const generateButton = document.getElementById("generateButton");

const myText = document.getElementById("myText");



function randomBlagues() {
    const randomIndex = Math.floor(Math.random() * blagues.length);
    return blagues[randomIndex]; 
}

 // Générer et afficher une blague au chargement de la page
 const initialBlague= randomBlagues();
 myText.textContent = initialBlague;


generateButton.addEventListener('click', function() {
    const random_blagues = randomBlagues();

    myText.textContent = random_blagues;
})