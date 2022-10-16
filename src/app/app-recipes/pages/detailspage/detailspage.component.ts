import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IgeneralState } from 'src/app/models/general-state.model';
import { GeneralStateService } from 'src/app/services/general-state.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss']
})
export class DetailspageComponent implements DoCheck {
  constructor(private route: ActivatedRoute, private generalstateservice: GeneralStateService, private router: Router) { }

  public id!: string;
  private isInList: boolean = false;
  public detailRecipe!: any;
  public dataGeneralState: IgeneralState | undefined;
  ngDoCheck(): void {
    this.dataGeneralState = this.generalstateservice.setValues();
    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.id = params['id'];
        }
      }
    )
    this.isInList = this.generalstateservice.recipesList.some(recipe => recipe.id == this.id);
    if (!this.isInList) {
      Swal.fire('Estas intentando acceder a un detalle que no está en el menú');
      this.router.navigate(['app/home']);
    }
    this.detailRecipe = this.generalstateservice.recipesList.find(recipe => recipe.id == this.id);
  }
}
