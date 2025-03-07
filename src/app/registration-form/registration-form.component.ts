import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  registrationForm! : FormGroup;

  ngOnInit(){
    this.registrationForm = new FormGroup({

      customerId: new FormControl("", this.customerIdValidator),
      username : new FormControl("", Validators.compose([
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z]+$'),
        Validators.required
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]+$')
      ])),
      confirmPassword:new FormControl('', Validators.required),
      accountNo: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(6)
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
  }
}
