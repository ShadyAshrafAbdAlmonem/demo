import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  activeIndex: number = 0;

  setActiveIndex(index: number): void {
    this.activeIndex = index;
  }

}
