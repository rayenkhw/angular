import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterModule, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  

  constructor(route : Router ){}

  
  
  title : string = 'revision';
  tes : boolean = false ;
  ba3 : string = "rayen";


test(){

console.log(this.ba3);



}

   fc()  {

    console.log("function works");

    
    form : new FormGroup({
      nom : new FormControl(''),
      age : new FormControl()

    }) ;
    
  }
  
}
