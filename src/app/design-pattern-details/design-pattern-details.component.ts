import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../shared/navigation.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-design-pattern-details',
  templateUrl: './design-pattern-details.component.html',
  styleUrls: ['./design-pattern-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DesignPatternDetailsComponent implements OnInit {
  item : any;
  title = '';

  constructor(private _navigationService: NavigationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params["item"]);
      this.title = params["title"];
      this.item = params["item"];
  });
  }

  onMenuClicked() {
    this._navigationService.toggleMenu();
  }
  ngOnInit() {
  }
}
