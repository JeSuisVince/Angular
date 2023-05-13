import { Component, OnInit } from '@angular/core';
import { UserService } from '../serviceU/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.username = currentUser.username;
    }
    
  }
}
