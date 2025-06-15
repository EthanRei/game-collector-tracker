import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Home } from './component/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  template: `
    <app-header />
    <app-home />
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = 'gcui';
}
