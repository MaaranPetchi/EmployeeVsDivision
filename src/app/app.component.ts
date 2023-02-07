import { Component, OnInit } from '@angular/core';

import { Product,divisions } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	products: Product[] = [];
  divisions:divisions[] = [];
	
	constructor(private productService: ProductService) { }
	
	ngOnInit() {
		this.getProducts();
	}
	
	getProducts(): void {
		this.productService.getProducts().subscribe(products => this.products = products);
	}
	
	//checkAllCheckBox(ev) { // Angular 9
        checkAllCheckBox(ev: any) { // Angular 13
		this.products.forEach(x => x.checked = ev.target.checked)
	}

	isAllCheckBoxChecked() {
		return this.products.every(p => p.checked);
	}
}