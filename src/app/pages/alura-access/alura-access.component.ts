import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Access } from './access.model';
import { AluraAccessService } from './alura-access.service';
import { AluraStatus } from './alura-status.model';
import { UpdateStatusComponent } from './update-status/update-status.component';

@Component({
  selector: 'app-alura-access',
  templateUrl: './alura-access.component.html',
  styleUrls: ['./alura-access.component.scss']
})
export class AluraAccessComponent implements OnInit {
  accesses?: Access[];
  searchForm!: FormGroup;
  isLoading = true;
  errorMessage?: string;

  statusList = Object.values(AluraStatus);

  pages: { next?: number, prev?: number } | undefined;
  
  names = ['teste 1', 'teste 2', 'teste 3'];

  constructor(private formBuilder: FormBuilder, 
    private aluraAccessService: AluraAccessService, 
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getAccesses(params);
    });

    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  getAccesses(params: { page?: number; status?: string } | undefined) {
    this.isLoading = true;

    this.aluraAccessService.getAll(params).subscribe(response => {
      this.accesses = response.body!;
      this.pages = this.parseHeaderLink(response.headers.get('Link'));    
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
    this.router.navigate(['alura-access'], { queryParams: { page }, queryParamsHandling: 'merge' });
  }

  filterBy(status: string | null) {
    this.router.navigate(['alura-access'], { queryParams: { status }, queryParamsHandling: 'merge' });
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
