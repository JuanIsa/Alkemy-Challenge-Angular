import { Injectable } from '@angular/core';
import { IgeneralState } from '../models/general-state.model';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class GeneralStateService {
    constructor() { }
    public recipesList: any[] = [];
    private dataGeneralState: IgeneralState = {
        totalPrice: 0,
        averageTime: 0,
        averageHealthScore: 0
    }

    removeItem(itemId: number): void {
        this.recipesList = this.recipesList.filter((recipe: any) => recipe.id !== itemId);
    }
    
    veganControl(dataRecipe: any): void {
        let countVegan = 0;
        this.recipesList.forEach(recipe => {
            if (recipe.vegan === dataRecipe.vegan) {
                countVegan += 1;
            }
        });
        if (countVegan < 2) {
            this.recipesList.push(dataRecipe);
            Swal.fire({
                title: 'Plato agregado al menú.',
                timer: 1500,
                timerProgressBar: true,
            });
        } else {
            Swal.fire(`Ya hay 2 platos ${dataRecipe.vegan ? 'veganos' : 'no veganos'}`);
        }
    }

    setDataListRecipes(dataRecipe: any) {
        if (this.recipesList.some(el => el.id === dataRecipe.id)) {
            Swal.fire('Ese plato ya se encuentra en el menú.');
        } else {
            if (this.recipesList.length < 4) {
                this.veganControl(dataRecipe);
            } else {
                Swal.fire('El menú solo puede tener un máximo de 4 platos.');
            }
        }
    }
    setValues(): IgeneralState {
        this.dataGeneralState.totalPrice = this.recipesList.reduce((acum, elemento) => acum + elemento.pricePerServing, 0);
        this.dataGeneralState.averageTime = (this.recipesList.reduce((acum, elemento) => acum + elemento.readyInMinutes, 0)) / this.recipesList.length;
        this.dataGeneralState.averageHealthScore = (this.recipesList.reduce((acum, elemento) => acum + elemento.healthScore, 0)) / this.recipesList.length;
        return this.dataGeneralState;
    }
}
