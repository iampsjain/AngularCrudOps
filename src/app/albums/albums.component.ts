import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  id:any;
  UserDetails:any;
  Albums:any;

  constructor(private _Activatedroute: ActivatedRoute,
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


    //get ulbums by userId

    this.gs.getAlbumsByUserId(this.id).subscribe((res:any)=>{
      this.Albums=res;
    },(err:any)=>{
      console.error(err)
    })


 }

  ngOnInit(): void {
  }

}
