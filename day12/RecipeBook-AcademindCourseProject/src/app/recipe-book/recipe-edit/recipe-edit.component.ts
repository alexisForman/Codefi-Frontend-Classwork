import { RecipesService } from '../../shared/recipes.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup<{ name: FormControl<string>; imagePage: FormControl<string>; description: FormControl<string>; }>;
  constructor(private route: ActivatedRoute,
              private recipesService: RecipesService) { }

  ngOnInit()   {
    this.route.params
    .subscribe(
      (params: Params)  =>  {
        this.id = +params['id'];
        this.editMode = params['id'] !=null;
        this.initForm();
      }
    );
  }

  onSubmit()  {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePage'],
    //   this.recipeForm.value['ingredients']);
    // That const is all redundant and comes into the method via recipeForm.value.
    if (this.editMode)  {
      this.recipesService.updateRecipe(this.id, this.recipeForm.value);
    } else  {
      this.recipesService.addRecipe(this.recipeForm.value);
    }
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    )
  }

  private initForm()  {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipesService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if(recipe['ingredients']) {
        for (let ingredient of recipe.ingredients)  {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePage': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

}

// This is how this code looked before I added forms using the dynamic approach:

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';

// @Component({
//   selector: 'app-recipe-edit',
//   templateUrl: './recipe-edit.component.html',
//   styleUrls: ['./recipe-edit.component.css']
// })
// export class RecipeEditComponent implements OnInit {
//   id: number;
//   editMode = false;
//   constructor(private route: ActivatedRoute) { }

//   ngOnInit()   {
//     this.route.params
//     .subscribe(
//       (params: Params)  =>  {
//         this.id = +params['id'];
//         this.editMode = params['id'] !=null;
//       }
//     );
//   }

// }
