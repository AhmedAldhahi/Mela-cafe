import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
