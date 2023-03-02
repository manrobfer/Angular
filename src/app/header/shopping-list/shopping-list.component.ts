import { Component, OnDestroy, OnInit } from "@angular/core"
import { Ingredients } from "app/shared/ingrdient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingList implements OnInit, OnDestroy {
    ingredients: Ingredients[]; 

    private idChangedSub: Subscription;
      
    constructor(private slService: ShoppingListService){}
 

  
    ngOnInit(): void {
        this.ingredients  = this.slService.getIngredients();
        this.idChangedSub = this.slService
                                .ingridientsChanged
                                .subscribe((ingredients: Ingredients[]) => {
                                            this.ingredients = ingredients; 
        }
        );
    }
    ngOnDestroy(): void {        
        this.idChangedSub.unsubscribe();
    }

}