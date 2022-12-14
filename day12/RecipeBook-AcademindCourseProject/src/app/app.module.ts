import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonalNotesComponent } from './personal-notes/personal-notes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirectiveTsDirective } from './shared/dropdown.directive.ts.directive';
import { ShoppingListService } from './shared/shopping-list.service';
import { AppRouting } from './app.routing';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalNotesComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    DropdownDirectiveTsDirective,
    RecipeStartComponent,
    RecipeEditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
