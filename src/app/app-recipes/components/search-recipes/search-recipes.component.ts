import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralStateService } from 'src/app/services/general-state.service';
import { RequestDataService } from 'src/app/services/request-data.service';
import {debounce, interval } from 'rxjs';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss']
})
export class SearchRecipesComponent implements OnInit {
  constructor(private requestdataservice: RequestDataService, private generalstate: GeneralStateService) { }
  searchForm: FormGroup = new FormGroup({});
  public searchLocalData: any[] | undefined;
  ngOnInit() {
    this.searchForm = new FormGroup(
      {
        searchInput: new FormControl('', [Validators.minLength(3), Validators.required])
      }
    )
    
    this.searchForm.get('searchInput')?.valueChanges.pipe(
      debounce(() => interval(1000))
    ).subscribe(
      {
        next: () => {
          if (
            this.searchForm.get('searchInput')?.errors?.['minlength'] === undefined &&
            this.searchForm.get('searchInput')?.errors?.['required'] === undefined
          ) {
            this.requestdataservice.getDataRecipe(this.searchForm.value.searchInput).subscribe(
              {
                next: (data) => {
                  this.searchLocalData = data.results;
                },
                error: (error) => console.log(error)
              }
            )
          } else {
            this.searchLocalData = [];
          }
        },
        error: (error) => console.log(error)
      }
    )
  }
}
