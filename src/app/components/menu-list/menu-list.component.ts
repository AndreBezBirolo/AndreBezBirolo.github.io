import { Component, Input, OnInit } from '@angular/core';
import { MenuList } from './menu-list';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() menuTitle: string = 'Menu';
  @Input() selectedMenu!: MenuList[];
  @Input() location!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
