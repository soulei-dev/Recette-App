import Category from "../models/category";
import Recipe from "../models/recipe";

export const CATEGORIES = [
  new Category(
    "01",
    "Patisserie",
    require("../assets/images/patisserie-cat.jpeg")
  ),
  new Category("02", "Dîner ", require("../assets/images/diner-cat.jpeg")),
  new Category("03", "Déjeuner ", require("../assets/images/dej-cat.jpeg")),
  new Category(
    "04",
    "Petit Déjeuner ",
    require("../assets/images/petit-dej-cat.jpeg")
  ),
  new Category("05", "Autre ", require("../assets/images/autre-cat.jpeg")),
  new Category(
    "08",
    "Hamburgers ",
    require("../assets/images/hamburger-cat.jpeg")
  ),
  new Category("09", "Désert ", require("../assets/images/desert-cat.jpeg")),
  new Category("10", "Rêgime ", require("../assets/images/regime-cat.jpeg")),
];

export const RECIPES = [
  new Recipe(
    "01",
    ["01", "03", "04"],
    15,
    require("../assets/images/macaracon-recipe.jpeg"),
    "Macaron",
    [
      "Colorant alimentaire en pâte",
      "Sucre en poudre",
      "Amandes en poudre",
      "Sucre glace",
      "Blanc d'oeuf",
    ],
    [
      "Commencer par mixer le sucre glace avec la poudre d'amande dans un mixeur. Passer au tamis (il faut que la poudre soit la plus fine possible, enlever les impuretés).",
      "Battre le blanc en neige et ajouter les 10 g de sucre, et le colorant, peu à peu en mixant jusqu'à ce que les blancs soient bien figés.",
      "Ajouter le sucre glace + les amandes en poudre au blanc en neige et mélanger délicatement avec une spatule afin de 'casser' un peu les blancs.",
      "Mettre la pâte à macaron dans une poche à douille et faire des petits tas sur une plaque recouverte de papier sulfurisé puis laisser reposer les macarons pendant 15 min.",
    ],
    [5, 6, 7, 8, 4]
  ),
  new Recipe(
    "02",
    ["02", "03"],
    35,
    require("../assets/images/ratatouille-recipe.jpeg"),
    "Ratatouille",
    ["Tomate(s)", "Aubergine(s)", "Oignon(s)", "Poivron(s) rouge(s)"],
    [
      "Couper les aubergines et les courgettes en dés de taille moyenne, les saler et les laisser dégorger pendant 10 min. Les essorer ensuite soigneusement.",
      "Éplucher et émincer les oignons. Couper les poivrons en 2, les épépiner puis retirer la membrane blanche. Les couper ensuite en gros morceaux.",
      "Laver les tomates, les éplucher et les couper en morceaux. Éplucher et dégermer l'ail, puis le hacher finement.",
      "Réservez chacun des légumes dans un récipient séparé. La cuisson des légumes pour la ratatouille se fait dans un ordre bien précis",
    ],
    [1, 2, 3, 4, 5]
  ),
];
