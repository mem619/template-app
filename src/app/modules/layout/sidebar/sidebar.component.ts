import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sidebarService: SideBarService) { }

  ngOnInit() {
  }

  getState(): boolean {
    return this.sidebarService.visible;
  }

  toogleState(): void {
    this.sidebarService.toggleVisible();
  }
}

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  visible:boolean = true;

  toggleVisible(): void {
    this.visible = !this.visible;
  }

  hide(): void {
    this.visible = false;
  }

  show(): void {
    this.visible = true;
  }

}
