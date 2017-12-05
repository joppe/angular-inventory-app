import {Component, Input} from '@angular/core';
import {Product} from '../product.model';

@Component({
    selector: 'app-product-image',
    template: `
        <img [src]="product.imageUrl">
    `
})
export class ProductImageComponent {
    @Input() public product: Product;
}
