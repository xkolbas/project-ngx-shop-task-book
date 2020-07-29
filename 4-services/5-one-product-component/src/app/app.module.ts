import { ProductComponent } from './product/product.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductSliderComponent } from './product/product-slider/product-slider.component';
import { ProductsService } from './services/products.service';
import { DescriptionComponent } from './product/description/description.component';
import { FeedbacksComponent } from './product/description/feedbacks/feedbacks.component';
import { InformationComponent } from './product/information/information.component';
import { ReviewPipe } from './shared/review.pipe';
import { RatePipe } from './shared/rate.pipe';
import { StarRatingComponent } from './product/information/star-rating/star-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductSliderComponent,
    DescriptionComponent,
    FeedbacksComponent,
    InformationComponent,
    ReviewPipe,
    RatePipe,
    StarRatingComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],

  providers: [ProductsService],
  bootstrap: [AppComponent],
})
// @ts-ignore
export class AppModule {}
