import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notfoundpage',
  templateUrl: './notfoundpage.component.html',
  styleUrls: ['./notfoundpage.component.scss']
})
export class NotfoundpageComponent {
  constructor(private router: Router) { }
  backHome(): void {
    this.router.navigate(['login']);
  }
}
