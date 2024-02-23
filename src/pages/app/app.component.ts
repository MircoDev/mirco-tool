import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule,MatToolbarModule,RouterOutlet,MatIconModule,FontAwesomeModule]
})
export class AppComponent {

  title = 'Mirco\'s Tool';
  mode = new FormControl('side' as MatDrawerMode);
  hasBackdrop = false;
  
  faCoffee = faCoffee;
  faUser = faUser;
}
