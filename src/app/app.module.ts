import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BookingComponent } from './components/booking/booking.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { DrinkMenuComponent } from './components/drink-menu/drink-menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CateringComponent } from './pages/catering/catering.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    HeroComponent,
    AboutComponent,
    GalleryComponent,
    BookingComponent,
    MenuComponent,
    FoodMenuComponent,
    DrinkMenuComponent,
    ContactComponent,
    ContactFormComponent,
    CateringComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // <-- HttpClientModule for TranslateLoader
    AppRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({ // <-- ngx-translate setup
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory, // <-- Function defined below
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// ✅ 👇 ADD THIS FUNCTION HERE 👇
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
