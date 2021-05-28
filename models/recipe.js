class Recipe {
  constructor(
    id,
    categoryIds,
    duration,
    imageUrl,
    name,
    ingredients,
    steps,
    amount
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.duration = duration;
    this.imageUrl = imageUrl;
    this.name = name;
    this.ingredients = ingredients;
    this.steps = steps;
    this.amount = amount;
  }
}

export default Recipe;
