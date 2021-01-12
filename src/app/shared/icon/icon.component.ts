import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MAPPED_ICON } from './icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @ViewChild('containerIcon', { read: ViewContainerRef, static: true }) containerIcon!: ViewContainerRef;

  @Input() color = '#B2B2B2';
  @Input() size = 'lg';
  @Input() icon!: string;

  mappedIcon = MAPPED_ICON;
  className?: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent();
    this.className = 'icon--' + this.size;
  }

  isValidIcon(icon: string): icon is keyof typeof MAPPED_ICON {
    return icon in this.mappedIcon;
  }

  loadComponent() {
    if(this.isValidIcon(this.icon)) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.mappedIcon[this.icon]);
      const componentRef = this.containerIcon.createComponent(componentFactory);
      componentRef.instance.color = this.color;
    } else {
      console.warn(`No icon "${this.icon}" found on icons definitions. Please check your code or add this icon to the icons.ts`);
    }
  }

}
