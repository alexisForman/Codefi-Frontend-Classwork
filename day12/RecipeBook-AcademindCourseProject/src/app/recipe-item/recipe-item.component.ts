import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-book/recipe.model';
import { RecipesService } from '../shared/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }

  onSelected()  {
    this.recipeService.recipeSelected.emit(this.recipe)
};

// This is how this looked before services:

// import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { Recipe } from '../recipe-book/recipe.model';

// @Component({
//   selector: 'app-recipe-item',
//   templateUrl: './recipe-item.component.html',
//   styleUrls: ['./recipe-item.component.css']
// })
// export class RecipeItemComponent implements OnInit {
//   @Input() recipe: Recipe;
//   @Output() recipeSelected = new EventEmitter<void>()
//   constructor() { }

//   ngOnInit(): void {
//   }

//   onSelected()  {
//     this.recipeSelected.emit();
//   }
// }
