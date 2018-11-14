import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  myEmp=[
    {id:1001,name:"Dhoni",age:32,position:"wk"},
    {id:1002,name:"Virat" ,age:28,position:"bts-man"},
    {id:1003, name:"bhuvi",age:27,position:"blw"},
    {id:1004,name:"anushka",age:29,position:"acts"}
    ];
  constructor() { }
add(a,b){
  return a+b; 
}

multi(x,y){
  return x*y;
}
        getMyInfo(){
      return this.myEmp;
    }
}
