import { Component } from '@angular/core';
import { content } from './tools.constant';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {

  pageContent = content;
  swiperConfig: SwiperOptions = {
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
