import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './info/about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListingComponent } from './procduct/product-listing/product-listing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListingComponent },
  { path: 'products/:id', component: ProductListingComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
