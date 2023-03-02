import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredients } from "app/shared/ingrdient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEdit {

    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

  
    constructor(private slService: ShoppingListService){}

    onAddItem(){
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredients(ingName,ingAmount);
        this.slService.addIngridient(newIngredient);


      
    }
} 

   