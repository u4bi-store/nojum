import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { CoreService } from '../../providers/core.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  public createForm: FormGroup;

  constructor(public core : CoreService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.createForm = this.formBuilder.group({
      type : ['', [
        <any> Validators.required
      ]],
      store : ['', [
        <any> Validators.required,
        <any> Validators.minLength(2),     
      ]],
      uri : ['', [
        <any> Validators.required,
        <any> Validators.pattern(/^[a-z0-9+]*$/),
        <any> Validators.minLength(4),
        <any> Validators.maxLength(12)
      ]],
      name : ['', [
        <any> Validators.required,
        <any> Validators.pattern(/^[\uac00-\ud7a3]*$/),     
        <any> Validators.minLength(2)
      ]],
      phone : ['', [
        <any> Validators.required,
        <any> Validators.pattern(/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/)
      ]],
      instagram : ['', []],
      facebook : ['', []]
    });
    
    console.log(this.createForm.value);
  }

  isValid = (record : string, value : string) => this.createForm.controls[record]['_errors'] ? this.createForm.controls[record]['_errors'][value] : false;
  

  createStore(){
    
    this.core.onRouter('/success');
  }
}
