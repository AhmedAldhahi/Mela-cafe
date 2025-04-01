import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // constructor(private translate: TranslateService) {
  //   translate.addLangs(['en', 'no']); // Available languages
  //   translate.setDefaultLang('en');   // Default language
  //   translate.use('en');              // Initial language
  // }

  // // ✅ Add this method explicitly
  // switchLang(lang: string): void {
  //   this.translate.use(lang);
  // }
}
