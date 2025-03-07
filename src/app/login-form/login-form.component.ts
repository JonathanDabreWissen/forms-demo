import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm! : FormGroup;

  constructor(public ls:LoginServiceService){

  }

  ngOnInit(){
    this.loginForm = new FormGroup({

      customerId: new FormControl("", this.customerIdValidator),
      
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8),
        //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]+$')
      ]))
    })
  }

  customerIdValidator(control:any):any{
    if(control.value.length === 7){
      return {customerId:true};
    }
  }

  abc(obj: any) {
    console.log(obj);
    this.ls.storeUser(obj);
    
  }
}
