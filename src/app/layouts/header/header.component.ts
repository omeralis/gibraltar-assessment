import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  positionScroll = 540;
  visibilityBackground: boolean = true;
  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public scroll(elementId: any): void {
    this.viewportScroller.scrollToAnchor(elementId)
  }

  @HostListener('document:mousewheel', ['$event'])
  scrollTop(event: any) {
    console.log('event scroll', event.pageY)
    if (event.pageY > this.positionScroll) {
      this.visibilityBackground = false;
      console.log('this.visibilityBackground', this.visibilityBackground);
    } else {
      this.visibilityBackground = true;
    }
  }

}
