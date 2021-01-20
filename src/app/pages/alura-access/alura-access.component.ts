import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Access } from './access.model';
import { AluraAccessService } from './alura-access.service';
import { UpdateStatusComponent } from './update-status/update-status.component';

@Component({
  selector: 'app-alura-access',
  templateUrl: './alura-access.component.html',
  styleUrls: ['./alura-access.component.scss']
})
export class AluraAccessComponent implements OnInit {
  accesses?: Access[];
  searchForm!: FormGroup;
  currentPage?: number;
  isLoading = true;
  errorMessage?: string;

  pages: { next?: number, prev?: number } = {};

  totalCount!: number;
  
  names = ['teste 1', 'teste 2', 'teste 3'];

  constructor(private formBuilder: FormBuilder, 
    private aluraAccessService: AluraAccessService, 
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => this.currentPage = Number.parseInt(params.page));

    this.getAccesses();

    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  getAccesses() {
    let page = 1;
    if(this.currentPage)
      page = this.currentPage;
      this.aluraAccessService.getAll(page).subscribe(response => {
      this.accesses = response.body!;

      const pages = this.parseHeaderLink(response.headers.get('Link'));
      this.pages = pages;
      
      this.totalCount = Number.parseInt(response.headers.get('X-Total-Count')!);

      this.isLoading = false;
    },
    () => {
      this.errorMessage = 'Ocorreu um erro, tente novamente ou contate o suporte.';
      this.isLoading = false;
    }
    );
  }

  openDialog(access: Access) {
    let copy = {} as Access;
    Object.assign(copy, access);
    const dialogRef = this.dialog.open(UpdateStatusComponent, {
      width: '35%',
      data: copy
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        copy.status = result;
        this.aluraAccessService.updateAccess(copy).subscribe(result => {
          access.status = result.status;
        });
      }
    });
  }

  changePage(page: number) {
    this.router.navigate(['alura-access'], { queryParams: { page } });
    this.currentPage = page;
    this.getAccesses();
  }

  private parseHeaderLink(header: string | null) {
    if (!header) {
      return;
    }

    const parts = header.split(',');
    const links = {} as any;
    parts.forEach(part => {
      let section = part.split(';');
      let url = section[0].replace(/<(.*)>/, '$1').trim();
      let name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = Number.parseInt(url.substring(url.indexOf('page=') + 5));
    });
    return links;
  }  
}
