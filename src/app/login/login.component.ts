import { Component, OnInit } from '@angular/core';

import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms'
import { from } from 'rxjs';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  
  constructor( public fb: FormBuilder,public serv:PostService,private route:Router ) {
    this.form=this.fb.group({
      mobile: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
   }

  ngOnInit() {
  }
  print() {
    //  console.log(" it workss...")
    
    let data={'phone':'+91'+this.form.get('mobile').value};
    // console.log(data);
    this.serv.otpGenerate(data).subscribe(
      
      response=>{
        this.form.reset();
        this.route.navigate(["/otp"]);
        // console.log(response);
      },error=>{

        // console.log(error);
        
        
      }
      
    );
    
    }
  }
