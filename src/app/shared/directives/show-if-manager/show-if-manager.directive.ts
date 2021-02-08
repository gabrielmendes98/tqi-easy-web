import { Directive, ElementRef, OnInit } from '@angular/core';
import { Role } from '../../../core/user/role.model';
import { UserService } from '../../../core/user/user.service';

@Directive({
  selector: '[showIfManager]',
})
export class ShowIfManagerDirective implements OnInit {
  constructor (
    private element: ElementRef<any>,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserRole() !== Role.Manager &&
    this.element.nativeElement.remove();
  }
}