import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Customer } from '../model/customer';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends GenericService<Customer> {
  private customerChange = new Subject <Customer[]>;
  private messageChange = new Subject<string>;

  constructor(protected override http: HttpClient) {
    super(
      http,
      `${environment.HOST}/clientes`
      );
  }

 //////////get set/////////////
 setCustomerChange(list: Customer[]){
  this.customerChange.next(list);
}

getCustomerChange(){
  return this.customerChange.asObservable();
}

setMessageChange(message: string){
  this.messageChange.next(message);
}

getMessageChange(){
  return this.messageChange.asObservable();
}

}
