import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import { BreakpointObserver} from '@angular/cdk/layout';
import { tap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatInputModule, MatIconModule, MatListModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() sideNavMode = new EventEmitter();
  navItems= ['Home', 'Tours', 'Destinations','About', 'Contact'];
  smallScreenWidth= 800;
  isSmallScreen$ = this.breakPointObserver.observe(`(max-width:${this.smallScreenWidth}px)`).pipe(
    tap((state)=>console.log(state))
  )

  constructor(private breakPointObserver:BreakpointObserver){
  }
  activateSideNav(){
    this.sideNavMode.emit();
  }
}
