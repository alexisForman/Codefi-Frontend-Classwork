import { Injectable } from "@angular/core";
import { Recipe } from "../recipe-book/recipe.model";
import { Ingredient } from "./ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipesService {
  recipeSelected = Recipe;
  private recipes: Recipe[]= [ //the colon is to add a type to the array, the type here had to be imported from the recipe module.
    new Recipe(
      'Schnitzel',
      'This is simply a test',
      'https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),

    new Recipe(
      'Burgers',
      'This is simply a test',
      'https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),

    new Recipe(
      'Even another test recipe',
      'This is simply a test',
      'https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
      []),

  ];

  constructor(private slServices: ShoppingListService)  {}

getRecipes()  {
  return this.recipes.slice();
};

addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.slServices.addIngredients(ingredients);
}
}
