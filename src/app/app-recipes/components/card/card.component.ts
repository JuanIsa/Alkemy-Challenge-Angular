import { Component, Input, OnInit } from '@angular/core';
import { GeneralStateService } from 'src/app/services/general-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  constructor(private generalService: GeneralStateService, private router: Router) { }
  @Input() infoRecipe!: any;
  @Input() cont!: number;
  ngOnInit(): void{
    let summary: any = document.getElementsByClassName('featuresrecipe');
    summary[this.cont].innerHTML = this.infoRecipe.summary;
  }
  recipeDetail(recipeId: number): void{
    this.router.navigate(['app/recipe_detail/', recipeId])
  }
  removeItem(recipeId:number): void{
    this.generalService.removeItem(recipeId);
  } 
}
