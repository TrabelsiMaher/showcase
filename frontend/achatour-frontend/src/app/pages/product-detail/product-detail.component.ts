import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/product.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';

@Component({
	standalone: true,
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
   imports: [CommonModule, ReactiveFormsModule],
})
export class ProductDetailComponent implements OnInit {
  product?: IProduct = {
  id: 0,
  name: '',
  price: 0,
  images: []
};;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getOne(id).subscribe((prod) => {
      this.product = prod;
    });
  }

  submit() {
    if (this.form.valid && this.product) {
      const order = {
        ...this.form.value,
        productId: this.product.id,
      };
      this.orderService.submitOrder(order).subscribe(() => {
        this.router.navigate(['/success']);
      });
    }
  }
}
