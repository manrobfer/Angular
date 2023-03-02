import { Component, EventEmitter, OnInit, Output  } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.services";

@Component({
    selector : 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css'],
    providers:[RecipeService]
})

export class RecipesList implements OnInit {

   recipes: Recipe[];


    constructor( private recipeService: RecipeService , private router: Router, private route: ActivatedRoute){}

    ngOnInit(){
        this.recipes = this.recipeService.getRecipes();
   
    }
    onRecipeSelected( ){

    }

    nNewRecipe(){
this.router.navigate(['new'], {relativeTo: this.route})
    }
   
   
    
}