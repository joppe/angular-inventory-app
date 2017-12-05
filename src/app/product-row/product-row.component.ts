import {Component, HostBinding, Input} from '@angular/core';
import {Product} from '../product.model';

@Component({
    selector: 'app-product-row',
    templateUrl: './product-row.component.html'
})
export class ProductRowComponent {
    @Input() product: Product;

    public count = 0;
    public fontSize = 12;
    public color = 'black';
    public list: string[] = ['foo', 'bar'];

    @HostBinding('attr.class') public cssClass = 'item';

    public increment(): void {
        this.count += 1;
    }

    public applyStyles(fontSize: HTMLInputElement, color: HTMLInputElement): void {
        this.fontSize = parseInt(fontSize.value, 10);
        this.color = color.value;
    }
}
