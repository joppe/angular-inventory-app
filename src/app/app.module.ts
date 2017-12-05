import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductRowComponent} from './product-row/product-row.component';
import {ProductImageComponent} from './product-image/product-image.component';
import {ProductDepartmentComponent} from './product-department/product-department.component';
import {PriceDisplayComponent} from './price-display/price-display.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductRowComponent,
        ProductImageComponent,
        ProductDepartmentComponent,
        PriceDisplayComponent,
        ProductFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
