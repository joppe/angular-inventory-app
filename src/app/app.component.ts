import {Component} from '@angular/core';
import {Product} from './product.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    product: Product;

    constructor() {
        this.product = new Product(
            'NICEHAT',
            'A Nice Black Hat',
            '/resources/images/products/black-hat.jpg',
            ['Men', 'Accessories', 'Hats'],
            29.99
        );
    }
}
