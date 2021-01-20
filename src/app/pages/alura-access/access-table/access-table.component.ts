import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Access } from '../access.model';
import { AluraStatus } from '../alura-status.model';

@Component({
  selector: 'app-access-table',
  templateUrl: './access-table.component.html',
  styleUrls: ['./access-table.component.scss']
})
export class AccessTableComponent implements OnInit, AfterViewInit, OnChanges {
  displayedColumns = ['id', 'name', 'status', 'date', 'action'];
  dataSource?: MatTableDataSource<Access>;

  @Input() accesses!: Access[];
  @Input() pages!: { next?: number, prev?: number }
  @Output() openDialog: EventEmitter<Access> = new EventEmitter<Access>();
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.accesses = changes.accesses.currentValue;
    this.pages = changes.pages.currentValue;
    this.dataSource = new MatTableDataSource(this.accesses);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.accesses);
  }

  ngAfterViewInit(): void {
    if(this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  openDialogEmitter(access: Access) {
    this.openDialog.emit(access);
  }

  mapIcon(status: AluraStatus) {
    if(status === AluraStatus.Approved) return 'check_circle';
    if(status === AluraStatus.Canceled) return 'cancel';
    if(status === AluraStatus.Waiting) return 'access_time';
    return '';
  }

  changePageEmitter(page: number) {
    this.changePage.emit(page);
  }

}
