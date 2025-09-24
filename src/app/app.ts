import { Component, signal } from '@angular/core';
import { ContactList } from './components/contact-list/contact-list';
import { AppHeader } from './components/app-header/app-header';
import { SideMenu } from './components/side-menu/side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactList, AppHeader, SideMenu],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('dashboard-app');
}
