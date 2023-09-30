import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Item } from '../model/item';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends GenericService<Item>{

  private itemChange = new Subject <Item[]>;
  private messageChange = new Subject<string>;

  constructor(protected override http: HttpClient) {
    super(
      http,
      `${environment.HOST}/servicios`
      );
  }

 //////////get set/////////////
 setItemChange(list: Item[]){
  this.itemChange.next(list);
}

getItemChange(){
  return this.itemChange.asObservable();
}

setMessageChange(message: string){
  this.messageChange.next(message);
}

getMessageChange(){
  return this.messageChange.asObservable();
}

}
