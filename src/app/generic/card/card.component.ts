import { ChangeDetectorRef, Component, Input, OnChanges, OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],

})
export class CardComponent implements OnInit,OnChanges {
  

  @Input() Posts:any;

  constructor(private ref: ChangeDetectorRef) { 
    console.log(this.Posts)
  }
  
  ngOnInit(): void {
  }

  ngOnChanges(change:SimpleChanges){
   this.Posts=change.Posts.currentValue
  }
}
