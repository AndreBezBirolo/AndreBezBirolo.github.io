import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements OnInit {

  @Input()
  public message = '';
  @Input()
  public classes = '';
  public text = '';
  private index = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.type();
  }

  private type(): void {
    if (this.index < this.message.length) {
      this.text += this.message.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), Math.random() * 200);
    }
  }

}
