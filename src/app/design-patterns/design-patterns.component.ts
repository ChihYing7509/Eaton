import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../shared/navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design-patterns',
  templateUrl: './design-patterns.component.html',
  styleUrls: ['./design-patterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  title = '';
  constructor(private _navigationService: NavigationService, private route: ActivatedRoute) { }
  onMenuClicked() {
    this._navigationService.toggleMenu();
  }
  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }
}
