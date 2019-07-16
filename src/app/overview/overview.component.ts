import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../shared/navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  title = '';
  constructor(private _navigationService: NavigationService, private route: ActivatedRoute) { }
  onMenuClicked() {
    this._navigationService.toggleMenu();
  }
  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }
}
