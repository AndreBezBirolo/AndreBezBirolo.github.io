import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { toolsContent } from '../content.constant';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  // TODO: Criar tipagem para conteúdo da página.
  public content = toolsContent;
  public swiperConfig: SwiperOptions = {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 6,
        spaceBetween: 15,
      }
    }
  }

  constructor() {
  }

}
