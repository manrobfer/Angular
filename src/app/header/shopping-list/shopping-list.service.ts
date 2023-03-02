
import { Ingredients } from "app/shared/ingrdient.model";

import {Subject } from 'rxjs';

export class ShoppingListService {

    //ingridientsChanged = new EventEmitter<Ingredients[]>();
    ingridientsChanged = new Subject<Ingredients[]>();

    
   private ingredients: Ingredients[] = [
        new Ingredients("Apples",5),
        new Ingredients("Oranges",1)
    ];

    getIngredients()
     {
        return this.ingredients.slice();
     }

     addIngridient(ingrdient : Ingredients){
        this.ingredients.push(ingrdient);
        this.ingridientsChanged.next(this.ingredients.slice());

     }
     addIngridients(ingrdients: Ingredients[]){
     // for(let ingrid of ingrdients){
     //    this.addIngridient(ingrid);
     // }
     this.ingredients.push(...ingrdients);
     this.ingridientsChanged.next(this.ingredients.slice());
     }
    
}