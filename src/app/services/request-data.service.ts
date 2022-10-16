import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequestDataService {
    constructor(private http: HttpClient) { }
    apiKey: string = 'db254b5cd61744d39a2deebd9c361444';
    apiKey2: string = 'cb1c464d94f142c08b156c5beddade8b';
    apiQuery: string = this.apiKey;

    getDataRecipe(searchitem:string): Observable<any>{
        return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchitem}&apiKey=${this.apiQuery}`);
    }
    getInfoIdRecipe(idRecipe:string): Observable<any>{
        return this.http.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?includeNutrition=false&apiKey=${this.apiQuery}`);
    }
}
