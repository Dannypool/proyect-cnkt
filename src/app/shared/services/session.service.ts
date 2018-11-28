import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  logout(): void {
    localStorage.clear();
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}
