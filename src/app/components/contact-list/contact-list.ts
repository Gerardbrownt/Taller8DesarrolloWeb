import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRow } from '../contact-row/contact-row';
import { Contact } from '../../../models/contact';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, ContactRow],
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.css']
})
export class ContactList implements OnInit {
  contacts = signal<Contact[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe({
      next: (data) => {
        this.contacts.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('No se pudieron cargar los contactos.');
        this.loading.set(false);
      }
    });
  }
}
