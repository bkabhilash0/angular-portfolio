import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {NavlinkComponent} from './layout/navlink/navlink.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';

import {NgIconsModule} from '@ng-icons/core';
import {lucideSun, lucideMoon} from "@ng-icons/lucide";
import {NotFoundComponent} from './pages/error/not-found/not-found.component'
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavlinkComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgIconsModule.withIcons({lucideSun, lucideMoon}),
    NgOptimizedImage,
  ],
  providers: [provideAnimationsAsync(),],
  bootstrap: [AppComponent]
})
export class AppModule {
}
