import { Component, Input, booleanAttribute } from '@angular/core';
import { MenuService } from '../../../../services/menu.service';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  @Input() name = '';
  @Input() icon = '';
  @Input() pageName = '';

  constructor(public menuService: MenuService) {}
}
