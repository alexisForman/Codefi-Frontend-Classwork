import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe-book/recipe.model'; //The dots are to tell the angular project how many
import { RecipesService } from '../shared/recipes.service';
// files up we have to go to get to the new file. The dots are like the cd command in the terminal.

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]

  constructor(private recipeService:RecipesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}


// This is how this looked before services:

// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { Recipe } from '../recipe-book/recipe.model'; //The dots are to tell the angular project how many
// import { RecipesService } from '../shared/recipes.service';
// // files up we have to go to get to the new file. The dots are like the cd command in the terminal.

// @Component({
//   selector: 'app-recipe-list',
//   templateUrl: './recipe-list.component.html',
//   styleUrls: ['./recipe-list.component.css']
// })
// export class RecipeListComponent implements OnInit {
//   @Output() recipeWasSelected = new EventEmitter<Recipe>();
//   recipes: Recipe[]

//   constructor(private recipeService:RecipesService) { }

//   ngOnInit(): void {
//     this.recipes = this.recipeService.getRecipes();
//   }

//   onRecipeSelected(recipe: Recipe)  {
//     this.recipeWasSelected.emit(recipe);
//   }

// }
