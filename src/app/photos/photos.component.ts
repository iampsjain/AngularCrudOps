import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  albumId:any;
  Photos:any=[];
  constructor(private _Activatedroute: ActivatedRoute,
    private gs:GeneralService
    ) {

      this._Activatedroute.paramMap.subscribe(params => {
      this.albumId = params.get('albumId');
    });

    this.gs.getPhotosByAlbumId(this.albumId).subscribe((res:any)=>{
      this.Photos=res;
    })
 }

  ngOnInit(): void {
  }

}
