import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Access } from './access.model';
import { AluraStatus } from './alura-status.model';

@Component({
  selector: 'app-alura-access',
  templateUrl: './alura-access.component.html',
  styleUrls: ['./alura-access.component.scss']
})
export class AluraAccessComponent implements OnInit {
  names = ['Teste 1', 'Teste 2', 'Teste 3'];
  dataSource: Access[] = [
    { id: '1', name: 'Gabriel lorem ipsum', status: AluraStatus.Approved, date: new Date('2021-01-15') },
    { id: '2', name: 'Jureg lorem ipsum', status: AluraStatus.Canceled, date: new Date('2021-01-16') },
    { id: '3', name: 'Jonas lorem ipsum', status: AluraStatus.Waiting, date: new Date('2021-01-17') },
  ];
  displayedColumns = ['id', 'name', 'status', 'date', 'action'];

  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
   }

  ngOnInit(): void {
  }

}
