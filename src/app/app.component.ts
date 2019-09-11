import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng8dashboard';
  constructor(private translate: TranslateService) {
    //translate.setDefaultLang('en');
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
