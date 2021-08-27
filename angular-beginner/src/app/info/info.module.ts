import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    ContactInfoComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InfoModule { }
