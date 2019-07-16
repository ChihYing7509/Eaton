import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigationService } from '../shared/navigation.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { npm_package_list } from '../shared/npm-package-list';

@Component({
  selector: 'app-npm-packages',
  templateUrl: './npm-packages.component.html',
  styleUrls: ['./npm-packages.component.scss']
})
export class NpmPackagesComponent implements OnInit {
  list = npm_package_list;
  title = '';
  searchText = '';
  item: any = '';
  @ViewChild('searchbar') searchbar: ElementRef;

  toggleSearch = false;

  constructor(private _navigationService: NavigationService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }
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
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "title": item.Repository,
          "item":JSON.stringify(item)
      }
    };
    this.router.navigate(["NPMPackageDetail"], navigationExtras);
  }
  isSelected(item: any) {
    return this.item === item;
  }
}
