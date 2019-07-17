import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../shared/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-design-pattern-details',
  templateUrl: './design-pattern-details.component.html',
  styleUrls: ['./design-pattern-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DesignPatternDetailsComponent implements OnInit {
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

  onMenuClicked() {
    this._navigationService.toggleMenu();
  }
  ngOnInit() {
  }
}
