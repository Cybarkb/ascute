import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CmsComponent } from './cms/cms.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path : "", redirectTo : 'home',pathMatch: 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'cms', component : CmsComponent},
  {path : 'about-us', component : AboutUsComponent},
  {path : 'contact-us', component : ContactUsComponent},
  {path : 'reviews', component : ReviewsComponent},
  {path : 'privacy', component : PrivacyComponent},
  {path : 'terms', component : TermsComponent},
  {path : 'faqs', component : FaqsComponent},
  {path : 'collection', component : CollectionComponent},
  {
    path : 'products', 
    component : ProductsComponent
  },
  {path : '**', redirectTo : 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
