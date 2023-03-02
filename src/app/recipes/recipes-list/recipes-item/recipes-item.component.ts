import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import { Recipe } from "app/recipes/recipe.model";
import { RecipeService } from "app/recipes/recipe.services";

@Component({
    selector: 'app-recipes-item',
    templateUrl: 'recipes-item.component.html',
    styleUrls: ['recipes-item.component.css']
})

export class RecipesItem implements OnInit{

   @Input() recipe: Recipe;
   @Input() index: number;

   
    ngOnInit(){

    }

  
    
}