import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private baseUrl = 'http://localhost:8080/api/orders'; 

  constructor(private http: HttpClient) {}

  submitOrder(order: IOrder): Observable<any> {
    return this.http.post(this.baseUrl, order);
  }
}
