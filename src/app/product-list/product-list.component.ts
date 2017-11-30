import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    @Input() products: Product[];

    @Output() selectProduct: EventEmitter<Product>;

    private currentProduct: Product;

    constructor() {
        this.selectProduct = new EventEmitter();
    }

    onProductSelect(product: Product): void {
        this.currentProduct = product;
        this.selectProduct.emit(product);
    }

    isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }

        return product === this.currentProduct;
    }
}
