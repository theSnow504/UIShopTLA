import { Component, OnDestroy } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, FormModule } from '@coreui/angular';
import { loginValue } from '../models/login.model';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective,
     NgStyle,FormsModule,FormModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnDestroy{

  model: loginValue;

  constructor(private logins: LoginService, private router: Router){
    this.model={
      userName:'',
      passWord:''
    };
  }
private loginsubscription?: Subscription;
  onFormSubmit()
  {
    console.log(this.model);
    this.loginsubscription = this.logins.getlogin(this.model).subscribe({
      next: (response) => {
        console.log('ye');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  ngOnDestroy(): void {
      this.loginsubscription?.unsubscribe();
  }

}
