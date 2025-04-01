import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  constructor(private translate: TranslateService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  switchLang(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const language = selectElement.value;
    this.translate.use(language);
  }
}
