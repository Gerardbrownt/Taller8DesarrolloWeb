import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type NavItem = { label: string; active?: boolean };

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.html',
  styleUrls: ['./side-menu.css']
})
export class SideMenu {
  brand = signal('Company name');

  mainNav: NavItem[] = [
    { label: 'Dashboard', active: true },
    { label: 'Orders' },
    { label: 'Products' },
    { label: 'Customers' },
    { label: 'Reports' },
    { label: 'Integrations' }
  ];

  savedReports: string[] = [
    'Current month',
    'Last quarter',
    'Social engagement',
    'Year-end sale'
  ];

  accountNav: string[] = [
    'Settings',
    'Sign out'
  ];

  activate(item: NavItem) {
    this.mainNav.forEach(i => i.active = false);
    item.active = true;
  }
}
