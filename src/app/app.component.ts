import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";
import { MenuItems } from './shared/menu-items/menu-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
export class AppComponent implements OnInit {

  title = 'ng8dashboard';

  constructor(
    public menuItems: MenuItems,
    private translate: TranslateService,
              private authService: AuthService,
              private router: Router) {
    //translate.setDefaultLang('en');
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
    translate.use('en');
  }


  ngOnInit(): void {
    this.authService.islogin();

    this.isloginn();
  }

  isloginn() {
    if (localStorage.getItem('token')) {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
