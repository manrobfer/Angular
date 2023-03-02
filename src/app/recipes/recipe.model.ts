import { Ingredients } from "app/shared/ingrdient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingridients: Ingredients[];

    constructor(name: string, description: string, imagePath: string, ingridients: Ingredients[]){
           this.name = name;
           this.description = description;
           this.imagePath = imagePath;
           this.ingridients = ingridients;
    }
}