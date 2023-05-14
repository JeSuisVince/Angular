import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../serviceU/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  username: string = '';
  password: string = '';
  error: string = '';
  errorCount: number = 0;

  constructor(private userService: UserService, private router: Router) {}

  onVisitorClick(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }  

  onSubmit(): void {
    const currentUser = this.userService.users.find(user => user.username === this.username);
    localStorage.setItem('username', this.username);
    if (currentUser) {
      if (currentUser.password === this.password) {
        this.router.navigate(['/home']);
      } else {
        this.errorCount++;
        if (this.errorCount === 1) {
          this.error = "Erreur ! Vous avez entré un mot de passe incorrect. Veuillez réessayer.";
        } else if (this.errorCount === 2) {
          this.error = "Tes nul";
        } else if (this.errorCount === 3) {
          this.error = "Fait un effort";
        } else if (this.errorCount >= 4) {
          this.error = "Heu frérot ?";
        }
      }
    } else {
      this.errorCount++;
      if (this.errorCount === 1) {
        this.error = "Erreur ! Le nom d'utilisateur est introuvable.";
      } else if (this.errorCount === 2) {
        this.error = "Tes nul";
      } else if (this.errorCount === 3) {
        this.error = "Fait un effort !";
      } else if (this.errorCount >= 4) {
        this.error = "Heu frérot ?";
      }
    }
  }
}
