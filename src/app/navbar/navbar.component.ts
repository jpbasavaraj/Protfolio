

import { Component, ElementRef, ViewChild, Renderer2,OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('collapsibleDiv') collapsibleDiv!: ElementRef;
  isCollapsed = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleBar() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.renderer.addClass(this.collapsibleDiv.nativeElement, 'show');
    } else {
      this.renderer.removeClass(this.collapsibleDiv.nativeElement, 'show');
    }
  }

}
