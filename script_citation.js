const button = document.querySelector("#btn");
const par = document.querySelector("#par")
let i = 0;

const quotes = [
"« Tu sais quand tu cherches une rue dans ta voiture... tu la trouves pas… T’as un reflex bizarre… Tu baisses le son de la radio!»  - Gad Elmaleh",
"« À la télé, ils disent : 'Y a trois millions de personnes qui veulent du travail'. C'est pas vrai, de l'argent leur suffirait»  — Coluche.",
"« Il y a deux sortes de justice : vous avez l’avocat qui connaît bien la loi, et l’avocat qui connaît bien le juge!» — Coluche",
"«   Les garçons quand c'est malade, ça croit que ça va mourir !  »  — Florence Foresti",
"« Certaines femmes disent que le jour de l'accouchement est le plus beau de leur vie... Je me demande à quoi ressemblent les autres jours de leur vie!», - Florence Foresti",
"«Les psychiatres, c’est très efficace. Moi, avant, je pissais au lit, j’avais honte. Je suis allé voir un psychiatre, je suis guéri. Maintenant, je pisse au lit, mais j’en suis fier»,  — Coluche.",
"« Il paraît que la charcuterie donnerait le cancer colorectal.Je ne comprends pas… Ils le mettent où le saucisson, les gens ??», -  Anne Roumanoff",
"«Il ne faut jamais prendre les gens pour des cons, mais il ne faut pas oublier qu'ils le sont», -  Les Inconnus",
"«J’ai très longtemps voulu faire prêtre. Mais j’étais trop timide pour aborder les enfants», -  Gaspard Proust ",
"« Il faut avoir le courage de reconnaître que le nazisme a commis des erreurs. Envahir la Pologne au lieu de la Suisse, c’est comme habiter en face de la Banque centrale et braquer le kebab.» - Gaspard Proust",
"«   Il est 8h57, t'es au lit, donc pas lavée, pas maquillée, pas caféinée, rien, et tu crois que tu va pouvoir y arriver ... en 3 minutes ... 8h57 ? Je suis laaarge ! Je peux le faire ... si je peux le faire : je ne me lave pas, je ne me maquille pas, j'enfile une djellaba, j'peux l'faire ... j'suis un petit peu en avance, j'vais dormir jusqu'à 58!», - Florence Foresti   ",
"« Le GPS marocain, il te dit “Arrête la voiture ! Ouvre la fenêtre… et demande à celui-là, la rue que tu cherches!», - Gad Elmaleh ",
"« Non j'suis pas du tout celle que tu crois blaireau ... Bruno pardon ! »  — Florence Foresti.",
"«  La dépression post-partum, le baby blues, le mot est faible! Tu as envie de te pendre avec le cordon ombilical... c'est pour ça qu'ils le coupent très vite»,  — Florence Foresti",
"« Je n’ai rien contre les étrangers. Le problème, c’est que d’une part, ils parlent pas français pour la plupart... Et selon le pays où on va, ils parlent pas le même étranger», - Coluche"
]



  button.addEventListener("click", function () {
    i = (i + 1) % quotes.length;
    let randomQuote = quotes[i];
    console.log(randomQuote);
    par.style.display = "block";

 
  if (i % 2 === 0) {
    par.classList.remove("grey");
    par.classList.add("white");
} else {
    par.classList.remove("white");
    par.classList.add("grey");
}
  par.textContent = randomQuote;
})


