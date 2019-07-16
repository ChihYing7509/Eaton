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
      console.log(params["item"]);
      this.title = params["title"];
      this.item = params["item"];
  });
  }

  ngOnInit() {
  }

  onMenuClicked() {
    this._navigationService.toggleMenu();
  }

}
