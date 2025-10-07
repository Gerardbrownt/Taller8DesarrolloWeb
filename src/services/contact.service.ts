import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly url = '/data/contacts.json'; // sale de public/data/

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }
}
