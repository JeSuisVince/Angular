import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   users = [
    {
      username: 'A',
      password: 'B',
      nom: 'C',
      prenom: 'D',
      mail: 'E',
      validpassword: 'F'
    },
    {
      username: 'vince',
      password: 'F',
      nom: 'Doe',
      prenom: 'John',
      mail: 'johndoe@example.com',
      validpassword: 'password123'
    },
    {
      username: 'Ludo',
      password: 'R',
      nom: 'Doe',
      prenom: 'Jane',
      mail: 'janedoe@example.com',
      validpassword: 'pa$$word456'
    },
  ];
  
  constructor() {
  }
}
