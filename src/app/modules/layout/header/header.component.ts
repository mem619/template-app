import { Component, OnInit } from '@angular/core';
import { SideBarService } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebarService: SideBarService) { }

  ngOnInit() {
  }

  changeState(): void {
    this.sidebarService.toggleVisible();
  }

}
