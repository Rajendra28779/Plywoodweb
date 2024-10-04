import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeadingComponent } from './heading/heading.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PlywoodtabComponent } from './plywoodtab/plywoodtab.component';
import { StelltabComponent } from './stelltab/stelltab.component';
import { HardwaretabComponent } from './hardwaretab/hardwaretab.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeadingComponent,
    FooterComponent,
    ContactusComponent,
    PlywoodtabComponent,
    StelltabComponent,
    HardwaretabComponent,
    AboutusComponent,
    PrivacyPolicyComponent,
    ReturnPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
