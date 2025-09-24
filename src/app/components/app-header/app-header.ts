import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.css']
})
export class AppHeader {
  periodos = ['Today', 'This week', 'This month'];
  selected = signal('This week');

  setPeriodo(p: string) {
    this.selected.set(p);
  }
}
