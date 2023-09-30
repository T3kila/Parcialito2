import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  displayedColumns: string[] = ['id', 'nombreComercialCliente', 'razonCliente', 'typeCliente',
  'oencargadoCliente', 'teldirectoCliente', 'celularCliente','correoCliente', 'direccionCliente',
  'actions'];  //columnas del servicio en el back
  dataSource: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
this.customerService.getCustomerChange().subscribe(data => {
      this.createTable(data);
    });

    this.customerService.getMessageChange().subscribe(data => {
      this.snackBar.open(data, 'INFO', { duration: 2000, verticalPosition: "top", horizontalPosition: "right" });
    });

    this.customerService.findAll().subscribe(data => {
      this.createTable(data);
    });

  }
  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  delete(idCustomer: number){
    this.customerService.delete(idCustomer).pipe(switchMap( ()=> {
      return this.customerService.findAll();
    }))
    .subscribe(data => {
      this.customerService.setCustomerChange(data);
      this.customerService.setMessageChange('DELETED!');
    })
    ;
  }

  createTable(customers: Customer[]){
    this.dataSource = new MatTableDataSource(customers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  }


