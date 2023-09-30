import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'servicio', 'descripcion', 'precio', 'actions'];  //columnas del servicio en el back
  dataSource: MatTableDataSource<Item>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.itemService.getItemChange().subscribe(data => {
      this.createTable(data);
    });

    this.itemService.getMessageChange().subscribe(data => {
      this.snackBar.open(data, 'INFO', { duration: 2000, verticalPosition: "top", horizontalPosition: "right" });
    });

    this.itemService.findAll().subscribe(data => {
      this.createTable(data);
    });

  }
  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  delete(idItem: number){
    this.itemService.delete(idItem).pipe(switchMap( ()=> {
      return this.itemService.findAll();
    }))
    .subscribe(data => {
      this.itemService.setItemChange(data);
      this.itemService.setMessageChange('DELETED!');
    })
    ;
  }

  createTable(items: Item[]){
    this.dataSource = new MatTableDataSource(items);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
/*
  openDialog(item?: Item){
    this.dialog.open(ItemDialogComponent, {
      width: '250px',
      data: item
    });
  }
*/
}
