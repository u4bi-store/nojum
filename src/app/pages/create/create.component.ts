import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

import { CoreService } from '../../providers/core.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  public createForm: FormGroup;
  public focusField : string = '';
  
  public isPostPhoneAuth : boolean;
  public isSuccessPhoneAuth : boolean;

  constructor(public core : CoreService, private formBuilder: FormBuilder) {
    this.isPostPhoneAuth = false;
    this.isSuccessPhoneAuth = false;
  }

  ngOnInit() {
    
    this.createForm = this.formBuilder.group({
      type : ['', [
        <any> Validators.required
      ]],
      name : ['', [
        <any> Validators.required,
        <any> Validators.pattern(/^[\uac00-\ud7a3]*$/),     
        <any> Validators.minLength(2),
        <any> Validators.maxLength(10),
      ]],
      store : ['', [
        <any> Validators.required,
        <any> Validators.minLength(2),
        <any> Validators.maxLength(12)
      ]],
      uri : ['', [
        <any> Validators.required,
        <any> Validators.minLength(2),
        <any> Validators.maxLength(12),
        <any> Validators.pattern(/^[a-z0-9+]*$/)
      ]],
      phone : ['', [
        <any> Validators.required,
        <any> Validators.pattern(/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/)
      ]],
      instagram : ['', []],
      facebook : ['', []]
    });
    
  }

  isValid = (record : string, value : string) => this.createForm.controls[record]['_errors'] ? this.createForm.controls[record]['_errors'][value] : false;
  

  createStore(model: Object, isValid: boolean){
    
    if(isValid){      
      alert(JSON.stringify(model));
      this.core.onRouter('/success');
    }

  }

  onStepper(stepper: MatStepper, index : number, field : any){
    stepper.selectedIndex = index;
    
    if(field) setTimeout(()=> field.focus(), 150);

  }
  
  postPhoneAuth(){
    this.isPostPhoneAuth = true;
  }

  checkPhoneAuth(){
    this.isPostPhoneAuth = false;
    this.isSuccessPhoneAuth = true;
  }

}
