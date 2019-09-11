import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {subscribeOn} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  register(form) {
    console.log(form.value);
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('home')
    })
  }

}
