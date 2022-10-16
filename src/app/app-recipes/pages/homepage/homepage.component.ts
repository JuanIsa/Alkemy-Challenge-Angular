import { Component, DoCheck } from '@angular/core';
import { IgeneralState } from 'src/app/models/general-state.model';
import { GeneralStateService } from 'src/app/services/general-state.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements DoCheck {
  constructor(private generalService: GeneralStateService) { }
  public recipesList: any[] | undefined;
  public dataGeneralState: IgeneralState | undefined;

  ngDoCheck(): void {
    this.dataGeneralState = this.generalService.setValues();
    this.recipesList = this.generalService.recipesList;
  }
}
