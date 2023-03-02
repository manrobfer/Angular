import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEdit } from './header/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingList}  from '../app/header/shopping-list/shopping-list.component'
import { RecipesList } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetails } from './recipes/recipes-detail/recipes-detail.component';
import { Recipe } from './recipes/recipe.model';
import { CommonModule } from '@angular/common';
import { RecipesItem } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { DropdownDirectives } from './shared/dropdown.directive';
import { ShoppingListService } from './header/shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingEdit,
    ShoppingList,
    RecipesList,
    RecipesDetails,
    RecipesItem,
    DropdownDirectives,
    RecipeStartComponent,
    RecipeEditComponent
    
      
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
