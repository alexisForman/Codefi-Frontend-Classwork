import { RecipesService } from '../../shared/recipes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';


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
    console.log(this.recipeForm);
  }

  private initForm()  {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if(this.editMode) {
      const recipe = this.recipesService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePage': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
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
