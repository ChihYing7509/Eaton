import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigationService } from '../shared/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { design_pattern_list } from '../shared/design-patterns';

@Component({
  selector: 'app-design-patterns',
  templateUrl: './design-patterns.component.html',
  styleUrls: ['./design-patterns.component.scss']
})
export class DesignPatternsComponent implements OnInit {
  list = design_pattern_list;
  title = '';
  item: any = '';
  @ViewChild('searchbar') searchbar: ElementRef;
  searchText = '';

  toggleSearch = false;

  constructor(private _navigationService: NavigationService, private route: ActivatedRoute) { }
  onMenuClicked() {
    this._navigationService.toggleMenu();
  }
  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }

  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }

  onSelected(item: any) {
    console.log(item);
    this.item = item;
  }
  isSelected(item: any) {
    return this.item === item;
  }
}
