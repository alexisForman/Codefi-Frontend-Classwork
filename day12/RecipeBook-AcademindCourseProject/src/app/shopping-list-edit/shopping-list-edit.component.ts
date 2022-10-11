import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;

constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredients(newIngredient);
  }
}

// This is what this looked like before the Shopping List service:

// import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

// import { Ingredient } from '../shared/ingredient.model';

// @Component({
//   selector: 'app-shopping-list-edit',
//   templateUrl: './shopping-list-edit.component.html',
//   styleUrls: ['./shopping-list-edit.component.css']
// })
// export class ShoppingListEditComponent implements OnInit {
// @ViewChild('nameInput') nameInputRef: ElementRef;
// @ViewChild('amountInput') amountInputRef: ElementRef;
// @Output() ingredientAdded = new EventEmitter<Ingredient>();
//   constructor() { }

//   ngOnInit(): void {
//   }

//   onAddItem() {
//     const ingName = this.nameInputRef.nativeElement.value;
//     const ingAmount = this.amountInputRef.nativeElement.value;
//     const newIngredient = new Ingredient(ingName, ingAmount);
//     this.ingredientAdded.emit(newIngredient)
//   }
// }
