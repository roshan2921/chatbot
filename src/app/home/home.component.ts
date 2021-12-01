import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
message:string='';
$subs:Subscription | undefined;
  constructor(private _messageService:MessageService) { }

  ngOnInit(): void {
    this.$subs=this._messageService.receiveMessage().subscribe(data=>{
      this.message=data;
    });
  }
  ngOnDestroy():void{
    this.$subs?.unsubscribe();
  }

}
