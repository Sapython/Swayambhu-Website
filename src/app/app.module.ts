import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FormsModule } from '@angular/forms';
import { HomeCardComponent } from './home-card/home-card.component';
import { OurWallComponent } from './our-wall/our-wall.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { Section1Component } from './section1/section1.component';
import { Section3Component } from './section3/section3.component';
import { Section6Component } from './section6/section6.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { KnowusComponent } from './knowus/knowus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ComingSoonComponent,
    HomeCardComponent,
    OurWallComponent,
    ImageCardComponent,
    Section1Component,
    Section3Component,
    Section6Component,
    OurProductsComponent,
    QuoteCardComponent,
    KnowusComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
