import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs/Subscription';

import { CoreService } from '../../providers/core.service';

import { FirebasePhoneAuthService } from '../../providers/firebase-phone-auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {
  
  public createForm: FormGroup;
  public focusField : string = '';
  
  public isRecaptchaPhoneAuth : boolean;
  public isPostPhoneAuth : boolean;
  public isSuccessPhoneAuth : boolean;

  @ViewChild('formPhone')
  private formPhone : ElementRef;

  @ViewChild('recaptchaElement')
  private recaptchaElement : ElementRef;
  public recaptchaVerifier : any;
  public subscription      : Subscription;

  constructor(
    public core : CoreService,
    private firebaseAuth: AngularFireAuth,
    private phoneAuth : FirebasePhoneAuthService,
    private formBuilder: FormBuilder
  ) {

    this.isRecaptchaPhoneAuth = false;
    this.isPostPhoneAuth = false;
    this.isSuccessPhoneAuth = false;
  }

  ngOnInit() {
    
    this.recaptchaVerifier = this.phoneAuth.createRecaptcha(this.recaptchaElement);
    this.subscription = this.phoneAuth.subscribe( (e) =>{

      switch(e.type){

        case 'sendLoginCode' :
          this.isPostPhoneAuth = true;
          this.formPhone.nativeElement.focus();
          this.phoneAuth.removeRecaptcha();

          break;
        case 'verifyLoginCode' :
          if(e.verificationData.code) return alert('인증번호가 틀립니다.');
          this.isPostPhoneAuth = false;
          this.isSuccessPhoneAuth = true;

          break;

        default : break;

      }

    });

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

  ngOnDestroy(){
    this.phoneAuth.removeRecaptcha();
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
    this.isRecaptchaPhoneAuth = true;
    this.phoneAuth.sendLoginCode('+82' + this.createForm.value.phone, this.recaptchaVerifier);
  }

  checkPhoneAuth(e){
    this.phoneAuth.verifyLoginCode(e);
  }

}
