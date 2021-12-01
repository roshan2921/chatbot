import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
private subject=new Subject<string>();
  constructor(private _http:HttpClient) { }
  sendMessage(message:string){
    this.subject.next(message);
  }
  receiveMessage():Observable<string>{
    return this.subject.asObservable();
  }
}
