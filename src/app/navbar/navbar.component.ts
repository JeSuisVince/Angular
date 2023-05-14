import { Component, OnInit } from '@angular/core';
import { UserService } from '../serviceU/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string | null = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }
}
