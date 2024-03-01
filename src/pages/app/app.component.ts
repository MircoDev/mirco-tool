import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    RouterOutlet,
    MatIconModule,
    FontAwesomeModule,
    PanelMenuModule,
    HomeComponent,
  ],
})
export class AppComponent implements OnInit {
  title = "Mirco's Tool";

  mode = new FormControl('side' as MatDrawerMode);
  hasBackdrop = false;
  faCoffee = faCoffee;
  faUser = faUser;

  items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Produttività',
        icon: 'pi pi-info',
        styleClass: 'custom-sidenav-menu-item',
        items: [
          {
            label: 'To-Do',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/todo',
          },
          {
            label: 'Calendario',
            icon: 'pi pi-fw pi-align-right',
          },
        ],
      },
      {
        label: 'Finanza',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Expense Tracker',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Monitoraggio finanze',
            icon: 'pi pi-fw pi-align-right',
          },
        ],
      },
    ];
  }
}
