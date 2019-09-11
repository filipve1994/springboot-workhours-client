import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(form) {
    console.log(form.value);
    this.authService.signIn(form.value).subscribe((res) => {
      console.log("Logged in!");
      this.router.navigateByUrl('home');
    });
  }

}
