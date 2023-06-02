import { Component, Input } from '@angular/core';
import menuImported from '../../menu.json';
import { IMenuList } from '../micro-components/menu-list/menu-list.interface';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public primaryMenu: IMenuList[] = menuImported
  @Input() copyrightName!: string;
  public year: number = (new Date()).getFullYear();

  constructor() {
  }

}
