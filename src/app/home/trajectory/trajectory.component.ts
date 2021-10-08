import { Component, OnInit } from '@angular/core';
import { content } from './trajectory.constant'

@Component({
  selector: 'app-trajectory',
  templateUrl: './trajectory.component.html',
  styleUrls: ['./trajectory.component.scss']
})
export class TrajectoryComponent implements OnInit {

  pageContent = content

  constructor() { }

  ngOnInit(): void {
  }

}
