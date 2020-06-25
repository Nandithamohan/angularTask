import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms'
@Component({
  selector: '',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  detail={'page':undefined,'query':undefined}
  list;
  output;

  form: FormGroup;
  
  constructor(public fb: FormBuilder,public serve:PostService,private router:Router,public route:ActivatedRoute ) {
    this.form=this.fb.group({
      search: ['']
    })

   }
 
  ngOnInit() {
    if(!this.serve.isAuthorized()){
      this.router.navigate(['/login']);
    }
    else{
      this.route.queryParams.subscribe(
        params =>{
          this.detail.page= params.page;
          this.detail.query=params.query;
          this.getproductlist(this.detail.page,this.detail.query)
        });
        
      
    }
  }
  getproductlist(page= 1, query='') {
    // console.log('hii');
    
    this.serve.getproductlist(page ,query).subscribe(
      response=>{
        
        
        this.list=response;
        this.output=response['results']
        // console.log(this.list);
        // console.log(this.output);
        
        
      },
      error=>{
        console.log(error);
        
      }
    );
  }
 
searchitem(){
  console.log("search works...");
  console.log(this.form.get('search').value);
  this.router.navigate(['/display'],{queryParams:{page:1,query:this.form.get('search').value}});
  this.form.reset();
  
}


  }


