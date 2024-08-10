import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup,FormBuilder,Validators, FormsModule } from '@angular/forms';
import { Checkbox, CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

import { CalendarModule } from 'primeng/calendar';

import { ButtonModule } from 'primeng/button';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,CheckboxModule,InputTextModule,CalendarModule,ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  constructor(private formBuilder: FormBuilder) {}
  form=this.formBuilder.group(
    {
     email:['',Validators.required],
     password:['',[Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]],
     
    }
   
  )

onSubmit(){
  console.log(this.form.value);
}


}

