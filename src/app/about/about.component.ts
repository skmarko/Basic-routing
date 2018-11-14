import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
mk=[]
  constructor( private empinfo:MyserviceService) { }

multip(){
  var sk= this.empinfo.multi(5,6)
  document.write("multip is:"+sk)
}
fun(){
this.mk=this.empinfo.getMyInfo();
console.log(this.mk);
document.write()
}
  ngOnInit() {
    
  }

  
}
