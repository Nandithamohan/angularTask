import { Injectable } from '@angular/core'
import { map, catchError } from 'rxjs/operators';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  phone_number;
  search;
  constructor(private http :HttpClient) { }
  
  public otpGenerate(data){ 
      this.phone_number=data['phone'];
    //  console.log(data);
     let url='http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/user/get_otp/';
  
    return this.http.post(url ,data);
  }
  public  accessToken (data){
    // console.log(data);
    let url="http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/user/get_access_token/";
    return this.http.post(url,data)
    .pipe(map(user=> {
      if (user && user['access']) {
        localStorage.setItem('access', user['access']);
        }
  ``    }),
    );
  }
getproductlist(page=1,query=''){
  let base_url="http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/fish/"
  let url=base_url+'?page='+page+'&search='+query
  let http_options=this.gethttp_options();
  return this.http.get(url,http_options)
}

gethttp_options(){
  return{
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "JWT"+localStorage.getItem('access')
    })
  }
}
isAuthorized(){
  if(localStorage.getItem('access'))
  return true;
  else
    return false;
}

}

