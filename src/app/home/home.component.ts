import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  Users:any=[];
 
  constructor(private gs:GeneralService) {}

  ngOnInit(): void {
    this.gs.getUsersList().subscribe((res:any)=>{
      this.Users=res;
    },(err:any)=>{
      console.error(err)
    });
  }

}
