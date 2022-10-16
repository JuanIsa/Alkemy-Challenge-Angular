import { Component, Input } from '@angular/core';
import { GeneralStateService } from 'src/app/services/general-state.service';
import { RequestDataService } from 'src/app/services/request-data.service';

@Component({
    selector: 'app-cardgrid',
    templateUrl: './cardgrid.component.html',
    styleUrls: ['./cardgrid.component.scss']
})
export class CardgridComponent  {
    constructor(private generalstateservice: GeneralStateService, private requestdataservice: RequestDataService) { }
    @Input() infoCard: any;
  
    addrecipe(): void {
        this.requestdataservice.getInfoIdRecipe(this.infoCard.id).subscribe(
            {
                next: (detailInfo) => {
                    this.generalstateservice.setDataListRecipes(detailInfo);
                },
                error: (error) => console.log(error)
            }
        )
    }
}
