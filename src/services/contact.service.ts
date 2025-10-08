import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({ providedIn: 'root' })
export class ContactService {

  private readonly url = 'https://raw.githubusercontent.com/Gerardbrownt/Taller8DesarrolloWeb/refs/heads/main/public/data/contacts.json';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }
}
