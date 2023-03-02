import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.services";

@Component({
    selector : 'app-recipes-detail',
    templateUrl: './recipes-detail.component.html',
    styleUrls: ['./recipes-detail.component.css']
})

export class RecipesDetails implements OnInit {
   recipe: Recipe;
   id: number;

    constructor(private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router){}
  

    ngOnInit(){
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.id);
            }
        );

    }

    onAddToShoppingList(){
        console.log(">>> Retorno ingredient " + this.recipe.ingridients);
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingridients)

    }

    onEditRecipe(){
          this.router.navigate(['edit'],{relativeTo: this.route})
    }


}