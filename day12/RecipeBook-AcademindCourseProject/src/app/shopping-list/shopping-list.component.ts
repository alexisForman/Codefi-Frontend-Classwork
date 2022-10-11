import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) =>  {
        this.ingredients = ingredients;
      }
    )
  }

}

// This is how this looked before Services:

// import { Component, OnInit } from '@angular/core';
// import { Ingredient } from '../shared/ingredient.model'

// @Component({
//   selector: 'app-shopping-list',
//   templateUrl: './shopping-list.component.html',
//   styleUrls: ['./shopping-list.component.css']
// })
// export class ShoppingListComponent implements OnInit {
//   ingredients: Ingredient[]=[
//     new Ingredient('apples', 5),
//     new Ingredient('tomatoes', 5),
//   ];

//   constructor() { }

//   ngOnInit(): void {
//   }

//   onIngredientAdded(ingredient: Ingredient) {
//     this.ingredients.push(ingredient);
//   }

// }
