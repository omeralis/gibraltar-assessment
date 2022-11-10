import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(    private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }
 
  public scroll(elementId: any): void {
    this.viewportScroller.scrollToAnchor(elementId)
  }
  

}
