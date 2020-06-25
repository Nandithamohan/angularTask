import { Component, OnInit } from '@angular/core';
import { NgOtpInputModule } from  'ng-otp-input';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
// import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  otp:number;
  error;
 
  config={
    allowNumbersOnly:true,
    length:6,
    inputStyles:{
      'color':'rgb(155, 182, 233)',
      'width':'56px',
      'height':'50px',
       'paddding': '12px 20px' ,
       'margin':'40px 10px 0px 40px',
       'text':'center',
      'background':'rgba(255,255,255,0.25)'

    }
    
  }

  constructor(public serv:PostService,private route:Router,) { }

  ngOnInit() {
  }
  onOtpChange(otp){
    this.otp=otp
    // console.log(otp)
  }
  accessToken(){
    let otp={'username':this.serv.phone_number,'password':this.otp};
    // console.log(otp);
    this.serv.accessToken(otp).subscribe(
      response=>{
        // console.log("verify");
          
        this.route.navigate(["/display"]);
        // console.log(response);
      },error=>{

         this.error="**invalid otp**";
         alert(this.error);
        // console.log(error);
        this.route.navigate(["/otp"]);
        
        
        
        
      }
    )
   

    }
  
    
  }
