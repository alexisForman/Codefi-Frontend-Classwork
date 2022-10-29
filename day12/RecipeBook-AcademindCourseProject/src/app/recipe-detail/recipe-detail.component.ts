import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe-book/recipe.model';
import { RecipesService } from '../shared/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit()   {
    // const id = this.route.snapshot.params['id']; this will work for the first time when we load our app

    this.route.params
      .subscribe(
        (params: Params)  =>  {
          this.id = +params['id'];
          this.recipe = this.recipesService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe()  {
    this.router.navigate(['edit'], { relativeTo: this.route });
    //Alternatively, we could have written this: this.router.navigate(['../, this.id, 'edit'], {relativeTo: this.route });
  }

  onDeleteRecipe()  {
    this.recipesService.deleteRecipe(this.id);
  }
}

// This is how this was set up before routing:

// import { Component, Input, OnInit } from '@angular/core';
// import { Recipe } from '../recipe-book/recipe.model';
// import { RecipesService } from '../shared/recipes.service';

// @Component({
//   selector: 'app-recipe-detail',
//   templateUrl: './recipe-detail.component.html',
//   styleUrls: ['./recipe-detail.component.css']
// })
// export class RecipeDetailComponent implements OnInit {
//   @Input()  recipe: Recipe;
//   constructor(private recipesService: RecipesService) { }

//   ngOnInit(): void {
//   }

//   onAddToShoppingList() {
//     this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
//   }

// }
