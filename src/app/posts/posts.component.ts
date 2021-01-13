import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../services/general.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  id: any;
  Post: any = [];
  UserDetails:any={};


  constructor(
    private _Activatedroute: ActivatedRoute,
    private gs:GeneralService
    ) {

      this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('userId');
    });



    //get user details by id
    this.gs.getUserById(this.id).subscribe((res:any)=>{
      this.UserDetails=res;
    },(err:any)=>{
      console.error(err)
    })



    // getting post by user id
    this.gs.getPostsByUserId(this.id).subscribe((res:any)=>{
      this.Post=res;
    },(err1:any)=>{
      console.error(err1)
    })

  }

  ngOnInit(): void {

  }

}
