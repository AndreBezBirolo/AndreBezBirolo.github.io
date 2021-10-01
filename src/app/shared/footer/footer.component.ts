import { Component, Input, OnInit } from '@angular/core';
import menuImported from '../menu.json'
import { MenuList } from '../../components/menu-list/menu-list';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  primaryMenu: MenuList[] = menuImported
  @Input() copyrightName!: string;
  year: number = (new Date()).getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
