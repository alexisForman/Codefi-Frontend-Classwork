import { Ingredient } from "./ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[]=[
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 5),
  ];

  getIngredients()  {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient)  {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[])  {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // } This is one options of how to do this, but it can break/slow the app cause it passes a lot of data.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());

  }
}
