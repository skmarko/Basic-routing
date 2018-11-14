import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  
constructor( private service:MyserviceService){}

sum(){
  var mark= this.service.add(2,2 );
  document.write("Sum Of :"+mark)
}
  
}
