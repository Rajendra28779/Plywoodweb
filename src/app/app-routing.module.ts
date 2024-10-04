import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HardwaretabComponent } from './hardwaretab/hardwaretab.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlywoodtabComponent } from './plywoodtab/plywoodtab.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { StelltabComponent } from './stelltab/stelltab.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full'},
  { path: 'landingpage', component:LandingPageComponent  },
  { path: 'contactus', component:ContactusComponent  },
  { path: 'plywood', component:PlywoodtabComponent  },
  { path: 'stell', component:StelltabComponent  },
  { path: 'hardware', component:HardwaretabComponent  },
  { path: 'aboutus', component:AboutusComponent  },
  { path: 'privacypolicy', component:PrivacyPolicyComponent  },
  { path: 'returnpolicy', component:ReturnPolicyComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
