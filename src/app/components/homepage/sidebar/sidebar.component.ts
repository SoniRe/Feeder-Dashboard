import { Component, signal } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenuItemComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(public menuService: MenuService) {}
}
