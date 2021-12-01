import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _messageService:MessageService) { }

  ngOnInit(): void {
  }
  sendMessage(message: string){
this._messageService.sendMessage(message);
  }

}
