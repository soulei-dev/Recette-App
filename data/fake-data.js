import Category from "../models/category";

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
