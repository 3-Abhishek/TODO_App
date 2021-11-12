import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  num = 4;

  public task = [
   {
     "name" : "Finish SE Assignment",
     "id" : 1,
     "details" : "Deadline : 2 Nov 2021"
   },
   {
     "name" : "Finish SL Lab Assignment",
     "id" : 2,
     "details" : "Deadline : 2 Nov 2021"
   },
   {
     "name" : "Submit assignments",
     "id" : 3,
     "details" : "Deadline : 2 Nov 2021"
   },
   {
     "name" : "I will eat",
     "id" : 4,
     "details" : "Deadline : 2 Nov 2021"
   }
 ];

 getTasks(){
   return this.task;
 }

 getNumber(){
   return this.num;
 }

  constructor() { }
}
