import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../shared/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-npm-package-details',
  templateUrl: './npm-package-details.component.html',
  styleUrls: ['./npm-package-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NpmPackageDetailsComponent implements OnInit {
  item: any;
  title = '';

  constructor(
    private _navigationService: NavigationService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.title = params["title"];
      this.item = JSON.parse(params["item"]);
      console.log(this.item);
  });
  }

  ngOnInit() {
  }

  onMenuClicked() {
    this._navigationService.toggleMenu();
  }

}
