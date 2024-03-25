import { Injectable, signal } from '@angular/core';
import gsap from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  showMenu = signal(true);
  currentMenu = signal('Dashboard');

  constructor() {}

  changeMenu(menu: string) {
    this.currentMenu.set(menu);
  }

  toggleMenu() {
    this.showMenu.update((oldVal) => !oldVal);

    !this.showMenu() &&
      gsap.to('#sidebar', {
        width: '4.6rem',
      });

    this.showMenu() &&
      gsap.to('#sidebar', {
        width: '16rem',
      });
  }
}
