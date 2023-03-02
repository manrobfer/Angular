import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from 'app/header/shopping-list/shopping-list.service';
import { Ingredients } from 'app/shared/ingrdient.model';
import { Recipe } from './recipe.model';

import {Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService){}

  //recipeSelected = new Subject<Recipe>();
    
   private recipes: Recipe[] = [
        new Recipe('Granola','Deliciosa granola caseira','https://cdn.awsli.com.br/757/757669/produto/134724941/1124091d08.jpg',[new Ingredients('Meat', 1)]),
        new Recipe('Pão integral', 'Pão integral caseiro','https://saborecia.com.br/wp-content/uploads/2020/07/pao-integral.jpg',[new Ingredients('Flu', 2)]),
        new Recipe('Patê de Beringela', 'Delicioso patê caseiro','https://img.itdg.com.br/tdg/images/recipes/000/178/850/221479/221479_original.jpg?mode=crop&width=710&height=400',[new Ingredients('Water', 2)])
];

getRecipes(){
  return this.recipes.slice();   
}

getRecipe(index: number){
  return this.recipes[index];   
}

addIngredientsToShoppingList(ingrdients: Ingredients[]){
  this.slService.addIngridients(ingrdients);

  
}


}