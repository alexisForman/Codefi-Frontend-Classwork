import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../shared/recipes.service';

import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipesService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // this.recipesService.recipeSelected
    // .subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   })


  }

}
