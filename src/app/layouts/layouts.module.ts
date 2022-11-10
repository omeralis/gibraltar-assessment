import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateAwesomeComponent } from './template-awesome/template-awesome.component';
import { ProductComponent } from './product/product.component';
import { ItemsComponent } from './items/items.component';
import { OfferComponent } from './offer/offer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    HomeComponent,
    FooterComponent,
    TemplateAwesomeComponent,
    ProductComponent,
    ItemsComponent,
    OfferComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
