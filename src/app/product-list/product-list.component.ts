import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    @Input() public products: Product[];

    @Output() public selectProduct: EventEmitter<Product>;

    private currentProduct: Product;

    constructor() {
        this.selectProduct = new EventEmitter();
    }

    public onProductSelect(product: Product): void {
        this.currentProduct = product;
        this.selectProduct.emit(product);
    }

    public isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }

        return product === this.currentProduct;
    }
}
